import { targetDefenseSkill } from '../../config/constants';
import HitTable from './hitTable';

export default class MeleeTable extends HitTable {
  constructor(hit, critModifier, crit, weaponskill, baseMissChance){
    super();
    //bind methods
    this.getCoefficient = this.getCoefficient.bind(this);

    if(hit < 0) { throw 'hit must be >= 0'};
    if(critModifier <= 0) { throw 'critmodifier must be > 0'};
    if(crit < 0) { throw 'crit must be >= 0'};
    if(weaponskill < 0 || weaponskill > 315) { throw 'weaponskill must be >= 0 and <= 315'};
    if(baseMissChance < 0) { throw 'basemisschance must be > 0'};

    //chance to dodge
    this.dodge = 56;

    //chance to crit
    this.crit = crit;
    this.critModifier = critModifier;

    //find miss chance after applying weaponskill effects
    if((targetDefenseSkill - weaponskill) <= 10){
      this.miss = baseMissChance + (targetDefenseSkill - weaponskill);
    }
    else{
      this.miss = baseMissChance + 20 + 4*(targetDefenseSkill - weaponskill - 10);
    }
    //apply hit from gear to reduce miss chance
    this.miss = (this.miss - hit) < 0 ? 0 : this.miss - hit;

    //declare glancing chance
    this.glancing = 400;
    this.glancingCoeff = 1 - (0.02*(targetDefenseSkill - weaponskill));

    //check if miss + dodge + glancing + crit is more than 100%
    //aka if there is space for hit to occur
    if((this.miss + this.dodge + this.glancing + this.crit) >= 1000){
      //no space for hit to occur, fill rest of table with crit
      this.crit = 1000 - this.miss + this.dodge + this.glancing;
      this.hit = 0;
    }
    else{
      //there is space for hit to occur, finding the table's actual hit chance
      this.hit = 1000 - this.miss - this.dodge - this.glancing - this.crit;
    }

    // let toprint = {
    //   miss: this.miss,
    //   glance: this.glancing,
    //   dodge: this.dodge,
    //   crit: this.crit,
    //   hit: this.hit,
    // };
    // console.log(toprint);
  }

  /*Gives a coefficient that tries to predict how damage is affected by hit and crit
  in the long run.
  */
  getCoefficient(){
    const value = this.glancing * this.glancingCoeff
      + this.crit * this.critModifier
      + this.hit;
    return value / 1000;
  }
};

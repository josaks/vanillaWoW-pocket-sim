import targetDefenseSkill from '../../config/constants'
import HitTable from './hitTable';

export default class CasterTable extends HitTable {
  constructor(hit, critModifier, crit){
    super();
    //bind methods
    this.getCoefficient = this.getCoefficient.bind(this);

    this.crit = crit;
    this.critModifier = critModifier;

    //base miss chance
    this.miss = 160;
    //apply hit from gear to reduce miss chance
    this.miss -= hit;

    //find the table's actual hit chance
    this.hit = 1000 - this.miss;
  }

  /*Gives a coefficient that tries to predict how damage is affected by hit and crit
  in the long run.
  */
  getCoefficient(){
    return (this.hit * (this.crit * this.critModifier));
  }
};

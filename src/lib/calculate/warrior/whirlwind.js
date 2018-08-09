import AbilityTable from '../../hittables/twohandTable';
import { critModifier } from './constants';

export default (form, time) => {
  const { ap, mhDmgMax, mhDmgMin, mhSpeed, hit, crit, mhSkill } = form;
  const baseDmg = (mhDmgMax + mhDmgMin) / 2;

  //cooldown in seconds
  const cooldown = 10;
  const amountOfWhirlwinds =  Math.floor(time / cooldown);

  //TODO implement normalized weaponspeeds

  const totalWWDamage = baseDmg + (mhSpeed * ap / 14) * amountOfWhirlwinds;

  //make hittable to get hit coefficient
  const table = AbilityTable(hit, critModifier, crit, mhSkill);

  return totalWWDamage * table.getCoefficient();
};

import AbilityTable from '../../hittables/twohandTable';
import { critModifier } from './constants';

export default (form, time) => {
  //get values from form
  const { ap, hit, crit, mhSkill } = form;
  //cooldown in seconds
  const cooldown = 6;
  const amountOfBloodthirsts =  Math.floor(time / cooldown);

  const totalBTDamage = 0.45 * ap * amountOfBloodthirsts;

  //make hittable to get hit coefficient
  const table = AbilityTable(hit, critModifier, crit, mhSkill);

  return totalBTDamage * table.getCoefficient();
};

import dwTable from '../../hittables/dwTable';
import { critModifier } from './constants';

export default (form, time) => {
  const { ap, mhDmgMax, mhDmgMin, ohDmgMax, ohDmgMin, mhSpeed, ohSpeed,
  hit, crit, mhSkill, ohSkill } = form;

  const amountOfMhHits = Math.floor(time / mhSpeed);
  const amountOfOhHits = Math.floor(time / ohSpeed);



  //mainhand
  const baseMhDmg = (mhDmgMax + mhDmgMin) / 2;
  let totalMhDmg = baseMhDmg + (mhSpeed * ap / 14) * amountOfMhHits;
  //mainhand hitTable
  const mhTable = dwTable(hit, critModifier, crit, mhSkill);
  //factor in hit coefficient
  totalMhDmg *= mhTable.getCoefficient();

  //offhand
  const baseOhDmg = (ohDmgMax + ohDmgMin) / 2;
  let totalOhDmg = baseOhDmg + (ohSpeed * ap / 14) * amountOfOhHits;
  //offhand hitTable
  const ohTable = dwTable(hit, critModifier, crit, ohSkill);
  //factor in hit coefficient
  totalOhDmg *= ohTable.getCoefficient();

  const totalWhiteDmg = totalMhDmg + totalOhDmg;
  return totalWhiteDmg;
};

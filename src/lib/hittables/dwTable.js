import MeleeTable from './meleeTable';

export default (hit, critModifier, crit, weaponskill) => {
  return new MeleeTable(hit, critModifier, crit, weaponskill, 240);
}

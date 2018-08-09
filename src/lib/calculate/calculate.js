import { ClassesEnum } from '../../config/constants'
const { warrior, rogue, druid, mage, warlock, priest, paladin, hunter, shaman } = ClassesEnum;

import calculateWarrior from './warrior/calculateWarrior';

export default (form, className) => {
  switch(className){
    case warrior:
    return calculateWarrior(form);
    // case rogue:
    // return calculateRogue(form);
    // case druid:
    // return calculateDruid(form);
    // case mage:
    // return calculateMage(form);
    // case warlock:
    // return calculateWarlock(form);
    // case priest:
    // return calculatePriest(form);
    // case paladin:
    // return calculatePaladin(form);
    // case hunter:
    // return calculateHunter(form);
    // case shaman:
    // return calculateShaman(form);

    default:
    return calculateWarrior(form);
  }
};

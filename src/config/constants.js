let ClassesEnum = Object.freeze({
  warrior:'warrior',
  rogue:'rogue',
  druid:'druid',
  mage:'mage',
  warlock:'warlock',
  priest:'priest',
  paladin:'paladin',
  hunter:'hunter',
  shaman:'shaman',
});

//normalized weapon mhSpeed
const Normalized_Weaponspeeds = Object.freeze({
  dagger: 1.7,
  onehand: 2.4,
  twohand: 3.3,
  ranged: 2.8,
});


//defense skill of the target that is being attacked
const targetDefenseSkill = 315;

//action types for Redux
const DATA_AVAILABLE = 'DATA_AVAILABLE';
const CHANGE_SELECTED_CLASS = 'CHANGE_SELECTED_CLASS';


export { ClassesEnum,
   DATA_AVAILABLE, CHANGE_SELECTED_CLASS,
   Normalized_Weaponspeeds,
   targetDefenseSkill };

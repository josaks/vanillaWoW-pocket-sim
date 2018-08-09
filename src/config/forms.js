import t from 'tcomb-form-native';
import { ClassesEnum } from './constants'
//this file defines the forms used for each class

//create form component to export
const Form = t.form.Form;
export { Form };

//form definitions
const warriorForm = t.struct({
  ap: t.Number,
  mhDmgMin: t.Number,
  mhDmgMax: t.Number,
  ohDmgMin: t.Number,
  ohDmgMax: t.Number,
  mhSpeed: t.Number,
  ohSpeed: t.Number,
  crit: t.Number,
  hit: t.Number,
  mhSkill: t.Number,
  ohSkill: t.Number,
});
const rogueForm = t.struct({
  ap: t.Number,
  mhDmgMin: t.Number,
  mhDmgMax: t.Number,
  ohDmgMin: t.Number,
  ohDmgMax: t.Number,
  mhSpeed: t.Number,
  ohSpeed: t.Number,
  crit: t.Number,
  hit: t.Number,
  mhSkill: t.Number,
  ohSkill: t.Number,
});
const mageForm = t.struct({
  sp: t.Number,
  spellCrit: t.Number,
  spellHit: t.Number,
});
const hunterForm = t.struct({
  rangedAp: t.Number,
  hit: t.Number,
  crit: t.Number,
  rangedSpeed: t.Number,
});
const warlockForm = t.struct({
  sp: t.Number,
  spellCrit: t.Number,
  spellHit: t.Number,
});
const paladinForm = t.struct({
  //TODO implement
});
const shamanForm = t.struct({
  //TODO implement
});
const priestForm = t.struct({
  //TODO implement
});
const druidForm = t.struct({
  //TODO implement
});



/*Set global stylesheet options for all forms in this app.
Stylesheet options are defined here:
https://github.com/gcanti/tcomb-form-native/blob/master/lib/stylesheets/bootstrap.js
Examples of how to use are here:
https://github.com/gcanti/tcomb-form-native/blob/master/docs/STYLESHEETS.md
*/
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const stylesheet = Form.stylesheet;
stylesheet.formGroup.normal.flexDirection = 'row';
stylesheet.formGroup.error.flexDirection = 'row';
stylesheet.textbox.normal.width = width*0.2;
stylesheet.textbox.error.width = width*0.2;
stylesheet.textbox.normal.marginLeft = 'auto';
stylesheet.textbox.error.marginLeft = 'auto';
stylesheet.textboxView.normal.flex = 1;
stylesheet.textboxView.error.flex = 1;

//form options
const options = {
  fields: {
    ap: {
      label: 'Attack Power',
    },
    mhDmgMin: {
      label: 'Min. damage mainhand',
    },
    mhDmgMax: {
      label: 'Max. damage mainhand',
    },
    ohDmgMin: {
      label: 'Min. damage offhand',
    },
    ohDmgMax: {
      label: 'Max. damage offhand',
    },
    mhSpeed: {
      label: 'Mainhand attack speed',
    },
    ohSpeed: {
      label: 'Offhand attack speed',
    },
    crit: {
      label: 'Crit chance(percent)',
    },
    hit: {
      label: 'Hit chance(percent)',
    },
    mhSkill: {
      label: 'Mainhand skill',
    },
    ohSkill: {
      label: 'Offhand skill',
    },
    sp:{
      label: 'Spell power',
    },
    spellCrit: {
      label: 'Spell crit',
    },
    spellHit: {
      label: 'Spell hit',
    },
    rangedAp: {
      label: 'Ranged attack power',
    },
    rangedSpeed: {
      label: 'Ranged attack speed'
    },
  },
};


//define class enums
const { warrior, rogue, druid, mage, warlock, priest, paladin, hunter, shaman } = ClassesEnum;

//helper function
const mergeFormAndOptions = (form, options) => { return { form: form, options: options}};

//put all models and options together so it can be exported in one object
const getForm = (className) => {
  switch(className){
    case warrior:
    return mergeFormAndOptions(warriorForm, options);
    case rogue:
    return mergeFormAndOptions(rogueForm, options);
    case druid:
    return mergeFormAndOptions(druidForm, options);
    case mage:
    return mergeFormAndOptions(mageForm, options);
    case warlock:
    return mergeFormAndOptions(warlockForm, options);
    case priest:
    return mergeFormAndOptions(priestForm, options);
    case paladin:
    return mergeFormAndOptions(paladinForm, options);
    case hunter:
    return mergeFormAndOptions(hunterForm, options);
    case shaman:
    return mergeFormAndOptions(shamanForm, options);

    default:
    return mergeFormAndOptions(warriorForm, options);
  }
};

export { getForm };

import { SIM_LENGTH } from '../../../config/settings';
import bloodthirst from './bloodthirst';
import whitehits from './whitehits';
import whirlwind from './whirlwind';

export default (form) => {
  return(
    whitehits(form, SIM_LENGTH)
    + bloodthirst(form, SIM_LENGTH)
    + whirlwind(form, SIM_LENGTH));
};

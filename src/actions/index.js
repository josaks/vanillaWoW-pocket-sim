import { DATA_AVAILABLE, CHANGE_SELECTED_CLASS } from '../config/constants';
//Import the sample data
import Data from '../instructions.json';

export function getData(){
    return (dispatch) => {
        const data  = Data.instructions;
        dispatch({type: DATA_AVAILABLE, data:data});
    };
};

export const selectClass = selectedClass => (
  { type: CHANGE_SELECTED_CLASS, payload: {selectedClass: selectedClass} });

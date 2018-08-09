import { combineReducers } from 'redux';

import { DATA_AVAILABLE, CHANGE_SELECTED_CLASS, ClassesEnum } from "../config/constants" //Import the actions types constant we defined in our actions

let dataState = { data: [], loading:true };
const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, { data: action.data, loading:false });
            return state;
        default:
            return state;
    }
};

let selectedClassState = { selectedClass: "No selection" };
const selectedClassReducer = (state = selectedClassState, action) => {
  switch (action.type){
    case CHANGE_SELECTED_CLASS:
      state = Object.assign({}, state, action.payload);
      return state;
    default:
      return state;
  }
}

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer,
    selectedClassReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;

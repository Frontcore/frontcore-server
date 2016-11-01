import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';

export default function rulesReducer(state = [], action) {

  switch (action.type) {
    case types.LOAD_RULES:
      return action.rules;

    default:
      return state;
  }

};

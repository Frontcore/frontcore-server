import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';

export default function browseReducer(state = [], action) {

  switch (action.type) {
    case types.BROWSE_RES_POST:
      return action.posts;

    default:
      return state;
  }

};

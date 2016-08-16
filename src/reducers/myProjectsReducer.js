'use strict';

import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';

export default function myProjectsReducer(state = [], action) {

  switch (action.type) {
    case types.LOAD_MY_PROJECTS_SUCCESS:
      return action.LOAD_MY_PROJECTS_SUCCESS;

    default:
      return state;
  }

};

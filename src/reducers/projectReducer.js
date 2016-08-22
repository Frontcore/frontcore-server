'use strict';

import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';

export default function ProjectReducer(state = [], action) {

  switch (action.type) {
    case types.GET_PROJECT_INFO:
      return action.posts;

    default:
      return state;
  }

};

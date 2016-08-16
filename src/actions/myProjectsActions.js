'use strict';

import * as types from '../constants/actionTypes';
import fetch from 'isomorphic-fetch';

export function loadMyProjects() {
  return dispatch => fetch('/api/v1/projects/list')
    .then(res => res.json())
    .then(
      myProjects => dispatch({ type: types.LOAD_MY_PROJECTS_SUCCESS, myProjects }),
      error => dispatch({ type:types.LOAD_MY_PROJECTS_ERROR, error })
    );
};

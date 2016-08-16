'use strict';

import * as types from '../constants/actionTypes';
import fetch from 'isomorphic-fetch';

// import MyProjectsAPI from '../api/myProjectsAPI';
//
// export function loadMyProjectsSuccess(myProjects) {
//   return {
//     type: types.LOAD_MY_PROJECTS,
//     myProjects: myProjects
//   };
// };
//
// export function loadMyProjects() {
//
//   return function(dispatch) {
//     return MyProjectsAPI.getAllMyProjects().then((myProjects) => {
//       dispatch(loadMyProjectsSuccess(myProjects));
//     }).catch((error) => {
//       throw error;
//     });
//   };
//
// };

export function loadMyProjects() {
  return dispatch => fetch('/api/v1/projects/list')
    .then(res => res.json())
    .then(
      data => dispatch({ type: types.LOAD_MY_PROJECTS_SUCCESS, data }),
      error => dispatch({ type:types.LOAD_MY_PROJECTS_ERROR, error })
    );
};

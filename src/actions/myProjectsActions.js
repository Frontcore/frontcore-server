'use strict';

import * as types from '../constants/actionTypes';
import fetch from 'isomorphic-fetch';

export function loadMyProjects() {
  return (dispatch) => {
    fetch('/api/v1/projects/list')
      .then(res => {
        res.json().then(function(myProjects) {
          dispatch({
            type: types.LOAD_MY_PROJECTS,
            myProjects
          });
        });
      }).catch(error => {
        console.error(error);
      });
  };
};

'use strict';

import * as types from '../constants/actionTypes';
import fetch from 'isomorphic-fetch';

function projectInfoPostRes(project, json) {
  return {
    type: types.GET_PROJECT_INFO,
    project,
    posts: json.project
  };
}

export function getProjectInfo(project) {
  return (dispatch) => {
    fetch('/api/v1/projects/info', {
      method: 'post',
      header: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(project)
    }).then(res => {
        res.json().then((data) => {
           dispatch(projectInfoPostRes(project, data));
        });
      }).catch(error => {
        console.error(error);
      });
  };
};

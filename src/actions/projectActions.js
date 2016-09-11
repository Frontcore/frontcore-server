'use strict';

import * as types from '../constants/actionTypes';
import fetch from 'isomorphic-fetch';

function projectInfoPostRes(project, json) {
  return {
    type: types.GET_PROJECT_INFO,
    project,
    posts: json
  };
}

export function getProjectInfo(project) {
  return (dispatch) => {
    fetch('/api/v1/project/info', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(project)
    }).then(res => {
        res.json().then((data) => {
           dispatch(projectInfoPostRes(project, data));
        });
      }).catch((error) => {
        console.error(error);
      });
  };
};

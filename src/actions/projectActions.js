import * as types from '../constants/actionTypes';
import HTTPHeaders from '../utils/headers.utils';
import fetch from 'isomorphic-fetch';

function _projectInfoPostRes(project, json) {
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
      headers: HTTPHeaders.ContentType,
      body: JSON.stringify(project)
    }).then(res => {
        res.json().then((data) => {
           dispatch(_projectInfoPostRes(project, data));
        });
      }).catch((error) => {
        console.error(error);
      });
  };
}

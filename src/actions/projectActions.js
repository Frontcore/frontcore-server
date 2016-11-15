import * as types from '../constants/actionTypes';
import HTTPHeaders from '../utils/headers.utils';
import service from '../utils/apiUrls.utils';
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
    fetch(service.api.v1 + service.path.project.info, {
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

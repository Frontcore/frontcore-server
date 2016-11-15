import * as types from '../constants/actionTypes';
import HTTPHeaders from '../utils/headers.utils';
import service from '../utils/apiUrls.utils';
import fetch from 'isomorphic-fetch';

export function loadMyProjects() {
  return (dispatch) => {
    fetch(service.api.v1 + service.path.projects.list)
      .then(res => {
        res.json().then((myProjects) => {
          dispatch({
            type: types.LOAD_MY_PROJECTS,
            myProjects
          });
        });
      }).catch(error => {
        console.error(error);
      });
  };
}

function _createProjectPostRes(config, json) {
  return {
    type: types.CREATE_PROJECT,
    config,
    posts: json
  };
}

export function createProject(config) {
  return (dispatch) => {
    fetch(service.api.v1 + service.path.project.create, {
      method: 'post',
      header: HTTPHeaders.ContentType,
      body: JSON.stringify(config)
    }).then(res => {
      res.json().then(() => {
        dispatch(_createProjectPostRes(config));
      });
    }).catch(error => {
      console.error(error);
    });
  };
}

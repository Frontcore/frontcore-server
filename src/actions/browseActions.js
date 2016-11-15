import * as types from '../constants/actionTypes';
import HTTPHeaders from '../utils/headers.utils';
import service from '../utils/apiUrls.utils';
import fetch from 'isomorphic-fetch';

function _browsePostRes(browse, json) {
  return {
    type: types.BROWSE_RES_POST,
    browse,
    posts: json.project.files
  };
}

export function browseProjectDir(browse) {
  return (dispatch) => {
    fetch(service.api.v1 + service.path.project.browse.files, {
      method: 'post',
      headers: HTTPHeaders.ContentType,
      body: JSON.stringify(browse)
    }).then(res => {
      res.json().then((data) => {
         dispatch(_browsePostRes(browse, data));
      });
    }).catch(error => {
      console.error(error);
    });
  };
}

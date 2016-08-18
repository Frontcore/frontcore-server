'use strict';

import * as types from '../constants/actionTypes';
import fetch from 'isomorphic-fetch';

function browsePostRes(browse, json) {
  return {
    type: types.BROWSE_RES_POST,
    browse,
    posts: json.project.files
  };
}

export function browseProjectDir(browse) {
  return (dispatch) => {
    fetch('/api/v1/browse/project/files', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(browse)
    }).then(res => {
      res.json().then(function(data) {
         dispatch(browsePostRes(browse, data));
      });
    }).catch(error => {
      console.error(error);
    });
  };
};

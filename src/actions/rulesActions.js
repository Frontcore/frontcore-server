import * as types from '../constants/actionTypes';
import HTTPHeaders from '../utils/headers.utils';
import service from '../utils/apiUrls.utils';
import fetch from 'isomorphic-fetch';

export function loadRules() {
  return (dispatch) => {
    fetch(service.api.v1 + service.path.lint.js.list)
      .then(res => {
        res.json().then((rules) => {
          dispatch({
            type: types.LOAD_RULES,
            rules
          });
        });
      }).catch(error => {
        console.error(error);
      });
  };
}

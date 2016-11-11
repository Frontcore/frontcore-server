import * as types from '../constants/actionTypes';
import fetch from 'isomorphic-fetch';

export function loadRules() {
  return (dispatch) => {
    fetch('/api/v1/lint/js/list')
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

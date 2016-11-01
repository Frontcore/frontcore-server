import * as types from '../constants/actionTypes';
import fetch from 'isomorphic-fetch';

function authenticatePostRes(credentials, json) {
	return {
    type: types.AUTHENTICATE,
    credentials,
    posts: json
  };
}

export function isAuthenticate(credentials) {
	return (dispatch) => {
    fetch('/api/v1/auth/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(credentials)
    }).then(res => {
        res.json().then((data) => {
					dispatch(authenticatePostRes(credentials, data));
        });
      }).catch((error) => {
        console.error(error);
      });
  };
};

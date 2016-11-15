import * as types from '../constants/actionTypes';
import fetch from 'isomorphic-fetch';

function _loginPostRes(credentials, json) {
	return {
    type: types.LOGIN,
    credentials,
    posts: json
  };
}

export function login(credentials) {
	return (dispatch) => {
    fetch('/api/v1/auth/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(credentials)
    }).then((res) => {
        res.json().then((data) => {
					dispatch(_loginPostRes(credentials, data));
        });
      }).catch((error) => {
        console.error(error);
      });
  };
}

function _logoutPostRes(json) {
	return {
		type: types.LOGOUT,
		posts: json
	};
}

export function logout() {
	return (dispatch) => {
		fetch('/api/v1/auth/logout', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
			}
		}).then(res => {
			res.json().then((data) => {
				dispatch(_logoutPostRes(data));
			});
		}).catch((error) => {
			console.error(error);
		});
	}
}

import * as types from '../constants/actionTypes';
import HTTPHeaders from '../utils/headers.utils';
import service from '../utils/apiUrls.utils';
import fetch from 'isomorphic-fetch';

function _loginPostRes(_isAuthenticated) {
	return {
    type: types.LOGIN,
    isAuthenticated: _isAuthenticated
  };
}

function _logoutPostRes(_isLoggedOut) {
	return {
		type: types.LOGOUT,
		isLoggedOut: _isLoggedOut
	};
}

export function login(_credentials) {
	return (dispatch) => {
    fetch(service.api.v1 + service.path.auth.login, {
      method: 'post',
      headers: HTTPHeaders.ContentType,
      body: JSON.stringify(_credentials)
    }).then((res) => {
        res.json().then((_isAuthenticated) => {
					dispatch(_loginPostRes(_isAuthenticated));
        });
      }).catch((error) => {
        console.error(error);
      });
  };
}

export function logout() {
	return (dispatch) => {
		fetch(service.api.v1 + service.path.auth.logout, {
			method: 'post',
			headers: HTTPHeaders.ContentType
		}).then(res => {
			res.json().then((_isLoggedOut) => {
				dispatch(_logoutPostRes(_isLoggedOut));
			});
		}).catch((error) => {
			console.error(error);
		});
	};
}

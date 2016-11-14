import Cookie from './cookie';

export default class Auth {
  constructor() {
    this.cookie = new Cookie();
  }

  getToken() {
    let _sessionCookie = this.cookie.read('session');

    if (!_sessionCookie) {
      return false;
    }
    return _sessionCookie;;
  }

  isLoggedIn() {
    if (!this.cookie.read('session')) {
      return false;
    }
    return true;
  }

  isLoggedOut() {
    if (!this.cookie.read('session')) {
      return true;
    }
    return false;
  }

  logout() {
    this.cookie.delete('session', { path: '/' });
  }

  redirectToLogin(nextState, replace) {
    console.log('R Login: ', nextState);
  }

  redirectToSetup(nextState, replace) {
    console.log('R Setup: ', nextState);
  }
};

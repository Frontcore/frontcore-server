import Cookie from './cookie.utils';

export default class Auth {
  constructor() {
    this.cookie = new Cookie();
  }

  getToken() {
    let _sessionCookie = this.cookie.read('session');

    if (!_sessionCookie) {
      return false;
    }
    return _sessionCookie;
  }

  isLoggedIn() {
    if (!this.cookie.read('session')) {
      return false;
    }
    return true;
  }

  logout() {
    this.cookie.delete('session', {
      path: '/'
    });
    return true;
  }
}

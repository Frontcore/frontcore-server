import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as BearerStrategy } from 'passport-http-bearer';

class Strategy {

  strategyForLogin(params) {
    passport.use('login', new LocalStrategy({
       passReqToCallback: true
    }, params));
  }

  strategyForCreateUser(params) {
    passport.use('create-user', new LocalStrategy({
       passReqToCallback: true
    }, params));
  }

  strategyForTokenVerify(params) {
    passport.use('verify-token', new BearerStrategy(params));
  }

};

module.exports = Strategy;

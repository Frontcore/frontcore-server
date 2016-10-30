import passport from 'passport';
import { Strategy } from 'passport-local';
import jwt from 'jsonwebtoken';
import _ from 'underscore';
import User from '../models/user.model';

let initLogin = (req, username, password, callback) => {
  User.findOne({ username: username }, (error, userInfo) => {

    if (error) {
      return callback(null, error);
    }

    if (!userInfo) {
      return callback(null, false);
    }

    if (!userInfo.validatePassword(password, userInfo.password)) {
      return callback(null, error);
    }

    return callback(null, userInfo);
  });
};

passport.use('local-login', new Strategy({
   passReqToCallback: true
}, initLogin));

/**
 * Authenticate user inputed username and password
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
exports.login = (req, res, next) => {
  let _user = req.user;
  let _token = jwt.sign({
    id: _user.id
  }, 'frontcore');

  _user = _.pick(req.user, 'username', 'firstName', 'lastName', 'email', 'welcomeTo', 'createdOn', 'updatedOn');
  _user.token = _token;

  res.status(200).json({
    "acknowledge": true,
    "user": _user
  });
};

/**
 * Destroy user's session
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
exports.logout = (req, res, next) => {
  // todo - coming soon
};

/**
 * Change user password
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
exports.changePwd = (req, res, next) => {
  // todo - coming soon
};

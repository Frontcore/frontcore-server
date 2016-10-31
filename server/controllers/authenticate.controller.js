import jwt from 'jsonwebtoken';
import _ from 'underscore';
import User from '../models/user.model';
import Strategy from '../utils/strategy.utils';

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

let initTokenVerify = (token, callback) => {
  console.log('token: ', token);
  jwt.verify(token, 'frontcore', (error, decoded) => {
    if (error) {
      return callback(error);
    }

    console.log('decoded: ', decoded);
    // let _user = users[decoded.id];
    // return callback(null, _user ? _user : false);
  });
};

let strategy = new Strategy();
strategy.strategyForLogin(initLogin);
strategy.strategyForTokenVerify(initTokenVerify);

/**
 * Authenticate user inputed username and password
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
exports.login = (req, res, next) => {
  let _user = req.user;
  let _userInfo = new User();

  let _token = _userInfo.generateToken(_user.id);

  _user = _.pick(req.user, 'username', 'firstName', 'lastName', 'email', 'welcomeTo', 'createdOn', 'updatedOn');
  _user.token = _token;

  res.status(200).json(_user);
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

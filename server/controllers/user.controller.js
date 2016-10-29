import passport from 'passport';
import { Strategy } from 'passport-local';
import User from '../models/user.model';

let initRegister = (req, username, password, callback) => {
  let _reqPayload = req.body;

  User.findOne({ "username": username }, (error, user) => {
    if (error) {
      return callback(error);
    }

    if (user) {
      return callback(null, false);
    }

    let _newUser = new User();
    _newUser.firstName = _reqPayload.firstName;
    _newUser.lastName = _reqPayload.lastName;
    _newUser.email = _reqPayload.email;
    _newUser.username = _reqPayload.username;
    _newUser.password = _newUser.hashPassword(_reqPayload.password);
    _newUser.token = "abcd"; // todo, temp token

    _newUser.save((error) => {
      if (error) {
        return callback(null, error);
      }

      return callback(null, _newUser);
    });
  });
};

passport.use("local-register", new Strategy({
   passReqToCallback: true
}, initRegister));

/**
 * Add user profile information
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
exports.setProfile = (req, res, next) => {
  res.status(200).json({
    "acknowledge": true
  });
};

/**
 * Fetch user profile information
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
exports.getProfile = (req, res, next) => {
  // todo - coming soon
};

/**
 * Update user profile
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
exports.updateProfile = (req, res, next) => {
  // todo - coming soon
};

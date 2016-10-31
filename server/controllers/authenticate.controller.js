import _ from 'underscore';
import User from '../models/user.model';
import Strategy from '../utils/strategy.utils';

let strategy = new Strategy({
  'userModel': User
});
strategy.authStrategy();

/**
 * Authenticate user inputed username and password
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
exports.login = (req, res, next) => {
  let _reqPayload = req.body;

  User.findOne({ "username": _reqPayload.username }, (error, _user) => {
    if (error) {
      return next(error);
    }

    if (!_user) {
      res.status(200).json({
        "success": false,
        "message": "Authenticate failed. User not found."
      });
    }

    _user.comparePassword(_reqPayload.password, (error, isMatch) => {
      if (error) {
        return next(error);
      }

      if (isMatch) {
        let _userInfo = _.pick(req.user, 'username', 'firstName', 'lastName', 'email', 'welcomeTo', 'createdOn', 'updatedOn');
        let _token = _user.generateToken(_user.id);

        _userInfo.token = 'JWT ' + _token; // Specific format to passport-jwt 'JWT Token_String'

        res.status(200).json({
          "success": true,
          "user": _userInfo
        });
      } else {
        res.status(200).json({
          "success": false,
          "message": "Authenticate failed. Password did not match."
        });
      }
    });

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

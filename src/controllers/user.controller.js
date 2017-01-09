import User from '../models/user.model';
import Strategy from '../utils/strategy.utils';
import msgUtils from '../utils/message.utils';

let strategy = new Strategy();
strategy.authStrategy(User);

let failureRes = {
  "success": false
};

/**
 * Add user profile information
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
exports.setProfile = (req, res, next) => {
  let _reqPayload = req.body;

  User.findOne({ "username": _reqPayload.username }, (error, user) => {
    if (error) {
      return next(error);
    }

    if (user) {
      failureRes.message = msgUtils.register.username;
      return res.status(422).json(failureRes);
    }

    let _newUser = new User();
    _newUser.firstName = _reqPayload.firstName;
    _newUser.lastName = _reqPayload.lastName;
    _newUser.email = _reqPayload.email;
    _newUser.username = _reqPayload.username;
    _newUser.password = _reqPayload.password;

    _newUser.save((error) => {
      if (error) {
        return next(error);
      }

      failureRes.message = msgUtils.register.created;
      return res.status(200).json(failureRes);
    });
  });
};

/**
 * Fetch user profile information
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
exports.getProfile = (req, res, next) => {
  let _reqPayload = req.body;

  User.findOne({ "username": _reqPayload.username }, 'firstName lastName email username welcomeTo createdOn updatedOn', (error, user) => {
    if (error) {
      return next(error);
    }

    res.status(200).json(user);
  });

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

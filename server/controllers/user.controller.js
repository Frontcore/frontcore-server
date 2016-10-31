import User from '../models/user.model';
import Strategy from '../utils/strategy.utils';

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

let strategy = new Strategy();
strategy.strategyForCreateUser(initRegister);

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
  let _reqPayload = req.body;

  console.log('Session 2: ', req.session);

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

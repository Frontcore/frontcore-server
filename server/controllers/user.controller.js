import User from '../models/user.model';

/**
 * Authenticate user inputed username and password
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
exports.authenticate = (req, res, next) => {
  // todo - coming soon
  let _reqPayload = req.body;
  res.status(200).json(_reqPayload);
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

/**
 * Add user profile information
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
exports.setProfile = (req, res, next) => {
  let _reqPayload = req.body;

  let _user = {};
  _user.firstName = _reqPayload.firstName;
  _user.lastName = _reqPayload.lastName;
  _user.email = _reqPayload.email;
  _user.username = _reqPayload.username;
  _user.password = _reqPayload.password;
  _user.token = "abcd"; // todo, temp token

  User.collection.insert(_user, (error, user) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        "acknowledge": true
      });
    }
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

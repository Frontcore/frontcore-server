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
  // todo - coming soon
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

import ESLint from '../models/eslint.model';
import ESLintService from '../services/eslint.service';

/**
 * Find the list of ESLint rules
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
exports.list = function(req, res, next) {
  ESLint.find({}, (error, result) => {
    if (error) {
      return next(error);
    }

    res.status(200).json(result);
  });
};

/**
 * Add the list of ESLint rules for initial setup
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
exports.add = function(req, res, next) {
  ESLint.collection.insert(ESLintService, (error, docs) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        "acknowledge": true
      });
    }
  });
};

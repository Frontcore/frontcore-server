import ESLint from '../models/eslint.model';

exports.list = function(req, res, next) {
  ESLint.find({}, (error, result) => {
    if (error) {
      return next(error);
    }

    res.status(200).json(result);
  });
};

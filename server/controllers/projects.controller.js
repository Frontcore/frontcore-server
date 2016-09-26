import fs from 'fs';
import Project from '../models/project.model';

exports.list = (req, res, next) => {
  Project.find({}, 'name version description location', (error, result) => {
    if (error) {
      return next(error);
    }

    res.status(200).json(result);
  });
};

import express from 'express';
import path from 'path';
import fs from 'fs';
import dir from 'node-dir';
import _ from 'underscore';
import dirUtils from '../../../utils/dirs.utils';

let router = express.Router();

/**
 * POST /browse/project/files - get the list of directories & files information
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.post('/project/files', (req, res, next) => {

  let bodyPayload = req.body;
  let browsePath = path.normalize(bodyPayload.browsePath);

  dir.readFiles(browsePath, {
    exclude: ['node_modules', 'bower_components']
  }, (error, content, next) => {
    if(error) {
      return next(error);
    }
    next();
  }, (error, files) => {
    if(error) {
      return next(error);
    }

    files = dirUtils.getDirectoryTree(browsePath, true);

    let projRootDir = browsePath.split('/');
    projRootDir = projRootDir[projRootDir.length - 1];

    res.status(200).json({
      "project": {
        "name": projRootDir,
        "path": files.projPath,
        "dirname": files.name,
        "files": _.sortBy(files.children, 'isFile')
      }
    });
  });

});

/**
 * @module router
 * @returns {Object} express router
 */
module.exports = router;

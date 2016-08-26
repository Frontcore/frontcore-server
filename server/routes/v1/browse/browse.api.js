import express from 'express';
import path from 'path';
import fs from 'fs';
import dir from 'node-dir';
import _ from 'underscore';
import dirUtils from '../../../utils/dirs.utils';

let router = express.Router();

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

module.exports = router;

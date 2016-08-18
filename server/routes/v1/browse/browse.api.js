'use strict';

import express from 'express';
import path from 'path';
import fs from 'fs';
import dir from 'node-dir';
import dirUtils from '../utils/dirs.utils';

let router = express.Router();

let PROJPATH = '/home/hegdeashwin/projects/elastic-hub'; //temp static

router.get('/project/files', (req, res, next) => {

  dir.readFiles(PROJPATH, {
    exclude: ['node_modules', 'bower_components']
  }, (error, content, next) => {
    if(error) {
      throw error;
    }
    next();
  }, (error, files) => {
    if(error) {
      throw error;
    }

    files = dirUtils.getDirectoryTree(PROJPATH, true);

    let projRootDir = PROJPATH.split('/');
    projRootDir = projRootDir[projRootDir.length - 1];

    res.status(200).json(files.children);
  });

});

module.exports = router;

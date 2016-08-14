'use strict';

import express from 'express';
import path from 'path';
import fs from 'fs';

let router = express.Router();

let PROJPATH = '/home/hegdeashwin/projects/elastic-hub/README.md'; //temp static

router.post('/project/file/content', (req, res, next) => {

  fs.readFile(PROJPATH, 'utf8', (error, content) => {
    if (error) {
      throw error;
    }
    res.status(200).json({
      "project": {
        "file": PROJPATH,
        "content": content
      }
    });
  });

});

module.exports = router;

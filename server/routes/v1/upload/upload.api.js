'use strict';

import express from 'express';
import path from 'path';
import multer from 'multer';

let router = express.Router();

/**
 * Storage config for Multer to set the destination and destination filename
 */
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../../', '/uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

/**
 * Few more Multer configs like limit upload file size
 * and limit on number of file that can be upload at a single time.
 */
let upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000, // 1MB
    files: 1
  }
}).single('config');

router.post('/config/file', (req, res, next) => {

  upload(req, res, (error) => {
    if(error) {
      throw error;
    }

    res.status(200).json({
      "status": {
        "isUploaded": true,
        "msg": "New project has been create."
      }
    });
  });

});

module.exports = router;

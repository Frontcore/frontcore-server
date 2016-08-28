import express from 'express';
import path from 'path';
import multer from 'multer';

import ProjectInfoCtrl from '../../../controllers/project.controller';

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
      return next(error);
    }

    return ProjectInfoCtrl.create(req, res, next);
  });

});

module.exports = router;

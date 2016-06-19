'use strict';

import express from 'express';
import fs from 'fs';
import path from 'path';
import STACK_CONFIG from '../../../config/stack.conf';

let router = express.Router();

router.post('/config/file', (req, res, next) => {

  console.log(req.files);

  console.log(STACK_CONFIG.upload.dirname);

  res.status(200).json({
		"config": {}
	});
});

module.exports = router;

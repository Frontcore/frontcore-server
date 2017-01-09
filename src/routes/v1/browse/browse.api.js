import express from 'express';
import path from 'path';
import fs from 'fs';
import BrowseCtrl from '../../../controllers/browse.controller';

let router = express.Router();

/**
 * POST /browse/project/files - get the list of directories & files information
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.post('/project/files', (req, res, next) => {
  return BrowseCtrl.browse(req, res, next);
});

/**
 * @module router
 * @returns {Object} express router
 */
module.exports = router;

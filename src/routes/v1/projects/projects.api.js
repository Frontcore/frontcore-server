import express from 'express';
import ProjectCtrl from '../../../controllers/projects.controller';

let router = express.Router();

/**
 * GET /projects/list - get the list of projects
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.get('/list', (req, res, next) => {
  return ProjectCtrl.list(req, res, next);
});

/**
 * @module router
 * @returns {Object} express router
 */
module.exports = router;

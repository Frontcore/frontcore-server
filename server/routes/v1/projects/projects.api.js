import express from 'express';
import ProjectCtrl from '../../../controllers/project.controller';

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
 * POST /projects/info - get the project information
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.post('/info', (req, res, next) => {
  return ProjectCtrl.info(req, res, next);
});

/**
 * @module router
 * @returns {Object} express router
 */
module.exports = router;

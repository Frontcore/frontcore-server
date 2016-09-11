import express from 'express';
import ProjectCtrl from '../../../controllers/project.controller';

let router = express.Router();

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

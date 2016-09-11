import express from 'express';
import ESLintCtrl from '../../../controllers/eslint.controller';

let router = express.Router();

/**
 * GET /lint/js/list - get the list of ESLint rules
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.get('/js/list', (req, res, next) => {
	return ESLintCtrl.list(req, res, next);
});

/**
 * POST /lint/js/add - insert rules into mongodb for initial setup
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.post('/js/add', (req, res, next) => {
	return ESLintCtrl.add(req, res, next);
});

module.exports = router;

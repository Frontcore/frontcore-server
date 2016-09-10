import express from 'express';
import ESLintCtrl from '../../../controllers/eslint.controller';

let router = express.Router();

router.get('/js/list', (req, res, next) => {
	return ESLintCtrl.list(req, res, next);
});

module.exports = router;

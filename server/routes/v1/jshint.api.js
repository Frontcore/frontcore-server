'use strict';

/**
 * Requires a 3rd party utility functions;
 */
import express from 'express';
import JSHINT_RULES from '../../services/jshint.service';

let router = express.Router();

router.get('/js/rules', function(req, res, next) {
	res.status(200).json({
		"status": true,
		"rules": JSHINT_RULES
	});
});

module.exports = router;

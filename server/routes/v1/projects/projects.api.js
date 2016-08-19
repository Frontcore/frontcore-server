'use strict';

import express from 'express';

let router = express.Router();

router.get('/list', (req, res, next) => {
  res.status(200).json([{
      "name": "elastic-hub",
      "version": "1.3.2",
      "description": "As elasticsearch plugin",
      "location": "/home/hegdeashwin/projects/elastic-hub"
    }, {
      "name": "protocore",
      "version": "1.0.0",
      "description": "Front-end stack for jQuery projects",
      "location": "/home/hegdeashwin/projects/protocore"
    }, {
      "name": "nebula",
      "version": "4.5.3",
      "description": "Front-end stack for Backbone.js projects",
      "location": "/home/hegdeashwin/projects/nebula"
    }]);
});

router.get('/info', (req, res, next) => {
  res.status(200).json({
      "name": "elastic-hub",
      "version": "1.3.2",
      "description": "As elasticsearch plugin",
      "location": "/home/hegdeashwin/projects/elastic-hub"
  });
});

module.exports = router;

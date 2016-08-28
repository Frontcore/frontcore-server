import express from 'express';
import ProjectCtrl from '../../../controllers/project.controller';

let router = express.Router();

router.get('/list', (req, res, next) => {
  return ProjectCtrl.list(req, res, next);
});

router.post('/info', (req, res, next) => {
  return ProjectCtrl.info(req, res, next);
});

module.exports = router;

import express, { Router } from 'express';

import {
  getTaskByChallengeId,
  getTaskArchiveByChallengeId,
} from '../controllers/tasks';

const router: Router = express.Router();

router.get('/archive/:challengeId', (req, res) =>
  getTaskArchiveByChallengeId(req, res)
);
router.get('/:challengeId', (req, res) => getTaskByChallengeId(req, res));

export default router;

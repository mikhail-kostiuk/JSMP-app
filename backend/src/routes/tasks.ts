import express, { Router } from 'express';

import {
  getUserCurrentTask,
  getTaskArchiveByChallengeId,
} from '../controllers/tasks';

const router: Router = express.Router();

router.get('/archive/:challengeId', (req, res) =>
  getTaskArchiveByChallengeId(req, res)
);
router.get('/current', (req, res) => getUserCurrentTask(req, res));

export default router;

import express, { Router } from 'express';

import { getAchievementsByChallengeId } from '../controllers/achievements';

const router: Router = express.Router();

router.get('/:challengeId', (req, res) =>
  getAchievementsByChallengeId(req, res)
);

export default router;

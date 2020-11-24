import { Request, Response } from 'express';

import { ActualAchievement } from '../interfaces/actualAchievement';
import { getAchievements } from '../services/achievements/getAchievements/getAchievements';

export function getAchievementsByChallengeId(
  req: Request,
  res: Response
): Response {
  const { challengeId } = req.params;

  const achievements: ActualAchievement[] = getAchievements(challengeId);

  return res.json(achievements);
}

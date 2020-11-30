import { Request, Response } from 'express';

import { ActualAchievement } from '../interfaces/actualAchievement';
import { getAchievements } from '../services/achievements/getAchievements/getAchievements';

export async function getAchievementsByChallengeId(
  req: Request,
  res: Response
): Promise<Response> {
  const { challengeId } = req.params;

  const achievements: ActualAchievement[] = await getAchievements(challengeId);

  return res.json(achievements);
}

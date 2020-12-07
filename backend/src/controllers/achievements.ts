import { Request, Response } from 'express';

import { ActualAchievement } from '../interfaces/actualAchievement';
import { getActualAchievements } from '../services/achievements/getActualAchievements/getActualAchievements';

export async function getAchievementsByChallengeId(
  req: Request,
  res: Response
): Promise<Response> {
  const { challengeId } = req.params;

  const achievements: ActualAchievement[] = await getActualAchievements(
    challengeId
  );

  return res.json(achievements);
}

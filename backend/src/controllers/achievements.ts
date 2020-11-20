import { Request, Response } from 'express';

import { getChallenges } from '../services/challenges/getChallenges/getChallenges';
import { Challenge } from '../interfaces/challenge';
import { ActualAchievement } from '../interfaces/actualAchievement';
import { getAchievements } from '../services/achievements/getAchievements/getAchievements';

export function getAchievementsByChallengeId(
  req: Request,
  res: Response
): Response {
  const { challengeId } = req.params;
  const challenges: Challenge[] = getChallenges();

  const achievements: ActualAchievement[] = getAchievements(
    challengeId,
    challenges
  );

  return res.json(achievements);
}

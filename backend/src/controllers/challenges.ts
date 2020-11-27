import { Request, Response } from 'express';

import { startNewChallenge } from '../services/challenges/startNewChallenge/startNewChallenge';
import tasks from '../tasks.json';
import achievements from '../achievements.json';
import { createAchievements } from '../mocks/achievements/createAchievements';
import { Challenge } from '../interfaces/challenge';

export function createNewChallenge(req: Request, res: Response): Response {
  const challenge: Challenge = startNewChallenge(
    tasks,
    30,
    createAchievements(achievements, new Date()),
    5
  );

  return res.json(challenge.id);
}

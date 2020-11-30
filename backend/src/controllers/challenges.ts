import { Request, Response } from 'express';

import { startNewChallenge } from '../services/challenges/startNewChallenge/startNewChallenge';
import achievements from '../achievements.json';
import { createAchievements } from '../mocks/achievements/createAchievements';
import { Challenge } from '../interfaces/challenge';
import { getTasks } from '../services/tasks/getTasks/getTasks';
import { TaskDocument } from '../types/TaskDocument';

export async function createNewChallenge(
  req: Request,
  res: Response
): Promise<Response> {
  const taskDocuments: TaskDocument[] = await getTasks();
  const tasks = taskDocuments.map((document) => ({
    _id: document._id,
    description: document.description,
  }));

  const challenge: Challenge = await startNewChallenge(
    tasks,
    30,
    createAchievements(achievements, new Date()),
    5
  );

  return res.json(challenge._id);
}

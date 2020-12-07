import { Request, Response } from 'express';

import { startNewChallenge } from '../services/challenges/startNewChallenge/startNewChallenge';
import { Challenge } from '../interfaces/challenge';
import { getTasks } from '../services/tasks/getTasks/getTasks';
import { TaskDocument } from '../interfaces/taskDocument';
import { AchievementDocument } from '../interfaces/achievementDocument';
import { getAchievements } from '../services/achievements/getAchievements/getAchievements';
import { Task } from '../interfaces/task';
import { Achievement } from '../interfaces/achievement';

export async function createNewChallenge(
  req: Request,
  res: Response
): Promise<Response> {
  const taskDocuments: TaskDocument[] = await getTasks();
  const achievementDocuments: AchievementDocument[] = await getAchievements();
  const tasks: Task[] = taskDocuments.map(
    (document: TaskDocument): Task => ({
      _id: document._id.toString(),
      description: document.description,
    })
  );
  const achievements: Achievement[] = achievementDocuments.map(
    (document: AchievementDocument): Achievement => ({
      _id: document._id.toString(),
      description: document.description,
      image: document.image,
      isMandatory: document.isMandatory,
    })
  );

  const challenge: Challenge = await startNewChallenge(
    tasks,
    30,
    achievements,
    5
  );

  return res.json(challenge);
}

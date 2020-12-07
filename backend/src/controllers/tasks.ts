import { Request, Response } from 'express';

import { getCurrentTask } from '../services/tasks/getCurrentTask/getCurrentTask';
import { getTaskArchive } from '../services/tasks/getTaskArchive/getTaskArchive';
import { ArchiveItem } from '../interfaces/archiveItem';
import { User } from '../interfaces/user';
import { getUser } from '../services/users/getUser/getUser';
import { ActualTask } from '../interfaces/actualTask';

export async function getUserCurrentTask(
  req: Request,
  res: Response
): Promise<Response> {
  const reqUser = req.user as Omit<User, 'password'>;

  const user: User = await getUser(reqUser.email);

  const currentTask: ActualTask = await getCurrentTask(user.activeChallengeId);

  return res.json(currentTask);
}

export async function getTaskArchiveByChallengeId(
  req: Request,
  res: Response
): Promise<Response> {
  const { challengeId } = req.params;

  const taskArchive: ArchiveItem[] = await getTaskArchive(challengeId);

  return res.json(taskArchive);
}

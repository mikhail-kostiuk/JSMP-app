import { Request, Response } from 'express';

import { getCurrentTask } from '../services/tasks/getCurrentTask/getCurrentTask';
import { getChallenges } from '../services/challenges/getChallenges/getChallenges';
import { getTaskArchive } from '../services/tasks/getTaskArchive/getTaskArchive';
import { ArchiveItem } from '../interfaces/archiveItem';

export function getTaskByChallengeId(req: Request, res: Response): Response {
  const { challengeId } = req.params;
  const date = new Date('September 1, 2020 00:00:00');

  const currentTask = getCurrentTask(challengeId);

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

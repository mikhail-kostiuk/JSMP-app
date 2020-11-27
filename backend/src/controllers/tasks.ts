import { Request, Response } from 'express';

import { getCurrentTask } from '../services/tasks/getCurrentTask/getCurrentTask';
import { getChallenges } from '../services/challenges/getChallenges/getChallenges';
import { getTaskArchive } from '../services/tasks/getTaskArchive/getTaskArchive';
import { ArchiveItem } from '../interfaces/archiveItem';

export function getTaskByChallengeId(req: Request, res: Response): Response {
  const { challengeId } = req.params;
  const challenges = getChallenges();
  const date = new Date('September 1, 2020 00:00:00');

  const currentTask = getCurrentTask(challengeId, challenges, date);

  return res.json(currentTask);
}

export function getTaskArchiveByChallengeId(
  req: Request,
  res: Response
): Response {
  const { challengeId } = req.params;
  const challenges = getChallenges();

  const taskArchive: ArchiveItem[] = getTaskArchive(challengeId, challenges);

  return res.json(taskArchive);
}

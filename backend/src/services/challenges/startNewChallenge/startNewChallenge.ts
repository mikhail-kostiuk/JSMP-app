import { v4 as uuidv4 } from 'uuid';

import { Challenge } from '../../../interfaces/challenge';
import { Task } from '../../../interfaces/task';
import { StatusState } from '../../../constants/statusState';
import { ChallengeState } from '../../../constants/challengeState';
import { shuffleArray } from '../../../utils/shuffleArray';
import { Status } from '../../../interfaces/status';
import { Achievement } from '../../../interfaces/achievement';
import { ChallengeModel } from '../../../models/Challenge';
import { ChallengeDocument } from '../../../types/ChallengeDocument';

export async function startNewChallenge(
  tasks: Task[],
  duration = 30,
  achievements: Achievement[],
  achievementsNumber: number = Math.floor(duration / 6)
): Promise<Challenge> {
  const currentDate = new Date();
  const shuffledTasks: Task[] = shuffleArray([...tasks]);
  const tasksStatus = new Map<string, Status>();
  const randomAchievements: Achievement[] = [
    ...achievements.slice(0, 2),
    ...shuffleArray(achievements.slice(2)),
  ].slice(0, achievementsNumber);

  shuffledTasks.forEach((task: Task): void => {
    tasksStatus.set(task.id, {
      state: StatusState.Pending,
      updated: currentDate,
    });
  });

  const achievementsStatus = new Map<string, Status>();

  randomAchievements.forEach((achievement) => {
    achievementsStatus.set(achievement.id, {
      state: StatusState.Pending,
      updated: currentDate,
    });
  });

  const challenge = {
    id: uuidv4(),
    state: ChallengeState.In_progress,
    startDate: currentDate,
    tasksOrder: shuffledTasks.slice(0, 30),
    tasksStatus: tasksStatus,
    achievementsStatus,
  };

  const challengeDocument: ChallengeDocument = await ChallengeModel.create(
    challenge
  );

  return { ...challenge, id: challengeDocument.id };
}

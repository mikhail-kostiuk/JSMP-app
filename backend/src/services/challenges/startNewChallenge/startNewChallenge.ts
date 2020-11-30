import { v4 as uuidv4 } from 'uuid';

import { Challenge } from '../../../interfaces/challenge';
import { Task } from '../../../interfaces/task';
import { StatusState } from '../../../constants/statusState';
import { ChallengeState } from '../../../constants/challengeState';
import { shuffleArray } from '../../../utils/shuffleArray';
import { Status } from '../../../interfaces/status';
import { Achievement } from '../../../interfaces/achievement';
import { ChallengeModel } from '../../../models/Challenge';
import { ChallengeDocument } from '../../../interfaces/challengeDocument';

export async function startNewChallenge(
  tasks: Task[],
  duration = 30,
  achievements: Achievement[],
  achievementsNumber: number = Math.floor(duration / 6)
): Promise<Challenge> {
  console.log(tasks);

  const currentDate = new Date();
  const shuffledTasks: Task[] = shuffleArray([...tasks]);
  const tasksStatus = new Map<string, Status>();
  const randomAchievements: Achievement[] = [
    ...achievements.slice(0, 2),
    ...shuffleArray(achievements.slice(2)),
  ].slice(0, achievementsNumber);

  shuffledTasks.forEach((task: Task): void => {
    tasksStatus.set(task._id.toString(), {
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

  const challengeDocument: ChallengeDocument = await ChallengeModel.create({
    state: ChallengeState.In_progress,
    startDate: currentDate,
    tasksOrder: shuffledTasks.slice(0, 30),
    tasksStatus: tasksStatus,
    achievementsStatus,
  });

  return {
    _id: challengeDocument._id,
    state: challengeDocument.state,
    startDate: challengeDocument.startDate,
    tasksOrder: challengeDocument.tasksOrder,
    tasksStatus: challengeDocument.tasksStatus,
    achievementsStatus: challengeDocument.achievementsStatus,
  };
}

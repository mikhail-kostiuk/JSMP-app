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
  const currentDate = new Date();
  const shuffledTasks: Task[] = shuffleArray([...tasks]);
  const tasksStatus = new Map<string, Status>();

  shuffledTasks.forEach((task: Task): void => {
    tasksStatus.set(task._id.toString(), {
      state: StatusState.Pending,
      updated: currentDate,
    });
  });

  const mandatoryAchievements: Achievement[] = [];
  const regularAchievements: Achievement[] = [];

  achievements.forEach((achievement: Achievement): void => {
    if (achievement.isMandatory) {
      mandatoryAchievements.push(achievement);
    } else {
      regularAchievements.push(achievement);
    }
  });

  const randomAchievements: Achievement[] = [
    ...mandatoryAchievements,
    ...shuffleArray(regularAchievements),
  ].slice(0, achievementsNumber);

  const achievementsStatus = new Map<string, Status>();

  randomAchievements.forEach((achievement) => {
    achievementsStatus.set(achievement._id, {
      state: StatusState.Pending,
      updated: currentDate,
    });
  });

  const challengeDocument: ChallengeDocument = await ChallengeModel.create({
    state: ChallengeState.In_progress,
    startDate: currentDate,
    tasksOrder: shuffledTasks.slice(0, 30),
    tasksStatus: tasksStatus,
    achievements: randomAchievements,
    achievementsStatus,
  });

  return {
    _id: challengeDocument._id,
    state: challengeDocument.state,
    startDate: challengeDocument.startDate,
    tasksOrder: challengeDocument.tasksOrder,
    tasksStatus: challengeDocument.tasksStatus,
    achievements: challengeDocument.achievements,
    achievementsStatus: challengeDocument.achievementsStatus,
  };
}

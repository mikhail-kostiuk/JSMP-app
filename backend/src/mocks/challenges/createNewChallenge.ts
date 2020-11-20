import { ChallengeState } from '../../constants/challengeState';
import { StatusState } from '../../constants/statusState';
import { Achievement } from '../../interfaces/achievement';
import { Challenge } from '../../interfaces/challenge';
import { Status } from '../../interfaces/status';
import { Task } from '../../interfaces/task';
import { calculateAchievementsStatus } from '../../services/achievements/calculateAchievementsStatus/calculateAchievementsStatus';
import { shuffleArray } from '../../utils/shuffleArray';

export function createNewChallenge(
  id: string,
  startDate: Date,
  tasks: Task[],
  duration = 30,
  achievements: Achievement[],
  achievementsNumber: number = Math.floor(duration / 6)
): Challenge {
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

  return {
    id,
    state: ChallengeState.In_progress,
    startDate,
    tasksOrder: shuffledTasks.slice(0, 30),
    tasksStatus: tasksStatus,
    achievementsStatus: calculateAchievementsStatus(
      randomAchievements,
      tasksStatus
    ),
  };
}

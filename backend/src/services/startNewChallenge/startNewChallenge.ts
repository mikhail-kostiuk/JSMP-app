import { v4 as uuidv4 } from 'uuid';

import Challenge from '../../interfaces/challenge';
import Task from '../../interfaces/task';
import StatusState from '../../constants/statusState';
import ChallengeState from '../../constants/challengeState';
import shuffleArray from '../../utils/shuffleArray';
import Status from '../../interfaces/status';
import Achievement from '../../interfaces/achievement';
import calculateAchievementsStatus from '../calculateAchievementsStatus/calculateAchievementsStatus';

function startNewChallenge(
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
    id: uuidv4(),
    state: ChallengeState.In_progress,
    startDate: new Date(),
    tasksOrder: shuffledTasks.slice(0, 30),
    tasksStatus: tasksStatus,
    achievementsStatus: calculateAchievementsStatus(
      randomAchievements,
      tasksStatus
    ),
  };
}

export default startNewChallenge;

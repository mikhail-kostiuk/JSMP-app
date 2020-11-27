import achievements from '../../../achievements.json';
import tasks from '../../../tasks.json';
import { ChallengeState } from '../../../constants/challengeState';
import { Challenge } from '../../../interfaces/challenge';
import { createAchievementsStatus } from '../../../mocks/achievements/createAchievementsStatus';
import { createTasksStatus } from '../../../mocks/tasks/createTasksStatus';
import { createTasksArchive } from '../../../mocks/tasks/createTasksArchive';

export function getChallenge(challengeId: string): Challenge {
  // TODO: Actually query db
  const date = new Date('September 1, 2020 00:00:00');

  return {
    id: '8bd10917-47e3-429a-a925-9b77f2a498c9',
    state: ChallengeState.In_progress,
    startDate: date,
    tasksOrder: tasks,
    tasksStatus: createTasksStatus(tasks, date, false, 5),
    tasksArchive: createTasksArchive(tasks, date, false, 5),
    achievementsStatus: createAchievementsStatus(achievements, 0),
  };
}

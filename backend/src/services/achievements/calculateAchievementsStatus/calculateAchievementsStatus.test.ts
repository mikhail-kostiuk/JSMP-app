import { calculateAchievementsStatus } from './calculateAchievementsStatus';
import { createAchievements } from '../../../mocks/achievements/createAchievements';
import { createAchievementsStatus } from '../../../mocks/achievements/createAchievementsStatus';
import { createTasksStatus } from '../../../mocks/tasks/createTasksStatus';
import achievements from '../../../achievements.json';
import tasks from '../../../tasks.json';
import { Status } from '../../../interfaces/status';

describe('calculateAchievementsStatus', () => {
  it('should return achievements status for the challenge', () => {
    const date = new Date('September 1, 2020 00:00:00');
    const tasksStatus: Map<string, Status> = createTasksStatus(
      tasks,
      date,
      true
    );
    const expectedResult: Map<string, Status> = createAchievementsStatus(
      achievements,
      5
    );
    const actualResult: Map<string, Status> = calculateAchievementsStatus(
      createAchievements(achievements, date),
      tasksStatus
    );

    expect(actualResult).toEqual(expectedResult);
  });
});

import calculateAchievementsStatus from './calculateAchievementsStatus';
import {
  createAchievements,
  createAchievementsStatus,
} from '../../mocks/achievements';
import { createTasksStatus } from '../../mocks/tasks';
import achievements from '../../achievements.json';
import tasks from '../../tasks.json';
import Status from '../../interfaces/status';

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
      createAchievements(achievements),
      tasksStatus
    );

    expect(actualResult).toEqual(expectedResult);
  });
});

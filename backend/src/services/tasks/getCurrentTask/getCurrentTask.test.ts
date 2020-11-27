import { getCurrentTask } from './getCurrentTask';
import { ActualTask } from '../../../interfaces/actualTask';
import { StatusState } from '../../../constants/statusState';
import { challenges } from '../../../mocks/challenges/challenges';
import tasks from '../../../tasks.json';

describe('getCurrentTask', () => {
  it('should return a current task with its status ', () => {
    const date: Date = new Date('September 5, 2020 00:00:00');
    const expectedResult: ActualTask = {
      ...tasks[4],
      status: { state: StatusState.Pending, updated: date },
    };
    const actualResult: ActualTask = getCurrentTask(
      '8bd10917-47e3-429a-a925-9b77f2a498c9',
      challenges,
      date
    );

    expect(actualResult).toEqual(expectedResult);
  });

  it('should return null if the challenge not found', () => {
    const date: Date = new Date('September 7, 2020 00:00:00');
    const actualResult: ActualTask = getCurrentTask(
      'a4c904df-8v4n-8b6f-a14d-ac8vb7381b3',
      challenges,
      date
    );

    expect(actualResult).toBeNull();
  });

  it('should return a task from correct position in a tasks order', () => {
    const date: Date = new Date('September 9, 2020 00:00:00');
    const currentTask: ActualTask = getCurrentTask(
      '8bd10917-47e3-429a-a925-9b77f2a498c9',
      challenges,
      date
    );
    const expectedResult = 8;
    const actualResult: number = challenges[0].tasksOrder.findIndex(
      (task) => task.id === currentTask.id
    );

    expect(actualResult).toBe(expectedResult);
  });
});

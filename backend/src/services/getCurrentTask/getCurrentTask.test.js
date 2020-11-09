import getCurrentTask from './getCurrentTask';
import challenges from '../../mocks/challenges';
import statusState from '../../constants/statusState';
import tasks from '../../tasks.json';

describe('getCurrentTask', () => {
  it('should return a current task with its status ', () => {
    const date = new Date('November 5, 2020 00:00:00');
    const actualResult = getCurrentTask(
      '8bd10917-47e3-429a-a925-9b77f2a498c9',
      challenges,
      date
    );
    const expectedResult = { ...tasks[4], status: statusState.Pending };

    expect(actualResult).toEqual(expectedResult);
  });

  it('should return null if the challenge not found', () => {
    const date = new Date('November 6, 2020 00:00:00');
    const actualResult = getCurrentTask(
      'a4c904df-8v4n-8b6f-a14d-ac8vb7381b3',
      challenges,
      date
    );

    expect(actualResult).toBeNull();
  });

  it('should return a task from correct position in a tasks order', () => {
    const date = new Date('November 4, 2020 00:00:00');
    const currentTask = getCurrentTask(
      '8bd10917-47e3-429a-a925-9b77f2a498c9',
      challenges,
      date
    );

    expect(
      challenges[0].tasksOrder.findIndex((task) => task.id === currentTask.id)
    ).toBe(3);
  });
});

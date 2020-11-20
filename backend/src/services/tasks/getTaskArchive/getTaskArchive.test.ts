import { getTaskArchive } from './getTaskArchive';
import { createTasksArchive } from '../../../mocks/tasks/createTasksArchive';
import { challenges } from '../../../mocks/challenges/challenges';
import tasks from '../../../tasks.json';
import { ArchiveItem } from '../../../interfaces/archiveItem';

describe('getTaskArchive', () => {
  it('should return all past tasks with their results', () => {
    const date = new Date('September 1, 2020 00:00:00');
    const expectedResult: ArchiveItem[] = [
      ...createTasksArchive(tasks, date, false, 5),
    ];
    const actualResult: ArchiveItem[] = getTaskArchive(
      '8bd10917-47e3-429a-a925-9b77f2a498c9',
      challenges
    );

    expect(actualResult).toEqual(expectedResult);
  });

  it('should return null if the challenge not found', () => {
    const actualResult: ArchiveItem[] = getTaskArchive(
      'a4c904df-8v4n-8b6f-a14d-ac8vb7381b3',
      challenges
    );

    expect(actualResult).toBeNull();
  });
});

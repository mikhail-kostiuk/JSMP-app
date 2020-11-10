import getTaskArchive from './getTaskArchive';
import archivedItems from '../../mocks/archivedItems';
import challenges from '../../mocks/challenges';

describe('getTaskArchive', () => {
  it('should return all past tasks with their results', () => {
    const expectedResult = [...archivedItems];
    const actualResult = getTaskArchive(
      'a4c0d2db-c245-4bfa-a73d-ac8fd82381b3',
      challenges
    );

    expect(actualResult).toEqual(expectedResult);
  });

  it('should return null if the challenge not found', () => {
    const actualResult = getTaskArchive(
      'a4c904df-8v4n-8b6f-a14d-ac8vb7381b3',
      challenges
    );

    expect(actualResult).toBeNull();
  });
});

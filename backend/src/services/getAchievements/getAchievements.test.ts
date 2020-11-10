import getAchievements from './getAchievements';
import challenges from '../../mocks/challenges';
import actualAchievements from '../../mocks/actualAchievements';
import ActualAchievement from '../../interfaces/actualAchievement';

describe('getAchievements', () => {
  it('should return a list of actual achievements', () => {
    const expectedResult: ActualAchievement[] = [...actualAchievements];
    const actualResult: ActualAchievement[] = getAchievements(
      '8bd10917-47e3-429a-a925-9b77f2a498c9',
      challenges
    );

    expect(actualResult).toEqual(expectedResult);
  });

  it('should return null if the challenge not found', () => {
    const actualResult: ActualAchievement[] = getAchievements(
      'a4c904df-8v4n-8b6f-a14d-ac8vb7381b3',
      challenges
    );

    expect(actualResult).toBeNull();
  });
});

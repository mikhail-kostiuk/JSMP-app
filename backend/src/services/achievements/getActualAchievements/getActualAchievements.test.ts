import { getActualAchievements } from './getActualAchievements';
import { createActualAchievements } from '../../../mocks/achievements/createActualAchievements';
import { ActualAchievement } from '../../../interfaces/actualAchievement';
import achievements from '../../../achievements.json';

describe('getAchievements', () => {
  it('should return a list of actual achievement with 0 accomplished achievements', async () => {
    const expectedResult: ActualAchievement[] = [
      ...createActualAchievements(achievements, 0),
    ];

    const actualResult: ActualAchievement[] = await getActualAchievements(
      '8bd10917-47e3-429a-a925-9b77f2a498c9'
    );

    expect(actualResult).toEqual(expectedResult);
  });

  it('should return a list of actual achievement with 2 accomplished achievements', async () => {
    const expectedResult: ActualAchievement[] = [
      ...createActualAchievements(achievements, 2),
    ];
    const actualResult: ActualAchievement[] = await getActualAchievements(
      '352a2632-5584-4ff6-8dbc-b5d430c0617f'
    );

    expect(actualResult).toEqual(expectedResult);
  });

  it('should return a list of actual achievement with 2 accomplished achievements', async () => {
    const expectedResult: ActualAchievement[] = [
      ...createActualAchievements(achievements, 5),
    ];
    const actualResult: ActualAchievement[] = await getActualAchievements(
      'e8616afd-6511-4170-b4cb-323ff3057440'
    );

    expect(actualResult).toEqual(expectedResult);
  });

  it('should return null if the challenge not found', async () => {
    const actualResult: ActualAchievement[] = await getActualAchievements(
      'a4c904df-8v4n-8b6f-a14d-ac8vb7381b3'
    );

    expect(actualResult).toBeNull();
  });
});

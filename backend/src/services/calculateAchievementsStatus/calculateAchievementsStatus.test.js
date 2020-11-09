import calculateAchievementsStatus from './calculateAchievementsStatus';
import challenges from '../../mocks/challenges';

describe('calculateAchievementsStatus', () => {
  const achievementsStatus = new Map();
  const challenge = challenges[0];
  challenge.achievements.forEach((achievement) =>
  achievementsStatus.set(achievement.description, challenge.tasksStatus)
  );

  it('should return achievements status for the challenge', () => {
    const actualResult = calculateAchievementsStatus(
      challenge.achievements,
      challenge.tasksStatus
    );
    const expectedResult = achievementsStatus;

    expect(actualResult).toEqual(expectedResult);
  });
});

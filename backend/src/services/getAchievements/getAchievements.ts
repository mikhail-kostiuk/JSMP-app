import ActualAchievement from '../../interfaces/actualAchievement';
import Challenge from '../../interfaces/challenge';
import achievements from '../../achievements.json';
import AchievementData from '../../types/AchievementData';

function getAchievements(
  challengeId: string,
  challenges: Challenge[]
): ActualAchievement[] | null {
  const challenge: Challenge = challenges.find(
    (challenge) => challenge.id === challengeId
  );

  if (!challenge) {
    return null;
  }

  const actualAchievements: ActualAchievement[] = [];

  for (const [achievementId, status] of challenge.achievementsStatus) {
    const achievement: AchievementData = achievements.find(
      (achievement: AchievementData): boolean =>
        achievement.id === achievementId
    );

    actualAchievements.push({
      ...achievement,
      status,
    });
  }

  return actualAchievements;
}

export default getAchievements;

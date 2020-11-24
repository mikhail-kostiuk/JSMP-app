import { ActualAchievement } from '../../../interfaces/actualAchievement';
import { Challenge } from '../../../interfaces/challenge';
import achievements from '../../../achievements.json';
import { AchievementData } from '../../../types/AchievementData';
import { getChallenge } from '../../challenges/getChallenge/getChallenge';

export function getAchievements(
  challengeId: string
): ActualAchievement[] | null {
  const challenge: Challenge = getChallenge(challengeId);

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

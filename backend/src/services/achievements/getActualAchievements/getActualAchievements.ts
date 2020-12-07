import { ActualAchievement } from '../../../interfaces/actualAchievement';
import { Challenge } from '../../../interfaces/challenge';
import { getChallenge } from '../../challenges/getChallenge/getChallenge';
import { Achievement } from '../../../interfaces/achievement';

export async function getActualAchievements(
  challengeId: string
): Promise<ActualAchievement[] | null> {
  const challenge: Challenge = await getChallenge(challengeId);

  if (!challenge) {
    return null;
  }

  const actualAchievements: ActualAchievement[] = [];

  for (const [achievementId, status] of challenge.achievementsStatus) {
    const achievement: Achievement = challenge.achievements.find(
      (achievement: Achievement): boolean => achievement._id === achievementId
    );

    actualAchievements.push({
      _id: achievement._id,
      description: achievement.description,
      image: achievement.image,
      isMandatory: achievement.isMandatory,
      status,
    });
  }

  return actualAchievements;
}

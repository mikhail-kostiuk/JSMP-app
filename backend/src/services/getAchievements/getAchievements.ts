import ActualAchievement from '../../interfaces/actualAchievement';
import Challenge from '../../interfaces/challenge';

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

  return challenge.actualAchievements;
}

export default getAchievements;

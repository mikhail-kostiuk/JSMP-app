import Achievement from '../../interfaces/achievement';
import Challenge from '../../interfaces/challenge';

function getAchievements(
  challengeId: string,
  challenges: Challenge[]
): Achievement[] | null {
  const challenge: Challenge = challenges.find(
    (challenge) => challenge.id === challengeId
  );

  if (!challenge) {
    return null;
  }

  return challenge.actualAchievements;
}

export default getAchievements;

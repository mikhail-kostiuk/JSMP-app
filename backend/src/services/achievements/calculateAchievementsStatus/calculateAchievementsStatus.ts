import Achievement from '../../interfaces/achievement';
import Status from '../../interfaces/status';

function calculateAchievementsStatus(
  achievements: Achievement[],
  tasksStatus: Map<string, Status>
): Map<string, Status> {
  const map = new Map<string, Status>();

  achievements.forEach((achievement: Achievement) =>
    map.set(achievement.id, achievement.checkComplete(tasksStatus))
  );

  return map;
}

export default calculateAchievementsStatus;

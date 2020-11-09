import Achievement from '../../interfaces/achievement';
import Status from '../../interfaces/status';

function calculateAchievementsStatus(
  achievements: Achievement[],
  tasksStatus: Status
): Map<string, Status> {
  const map: Map<string, Status> = new Map();

  achievements.forEach((achievement) =>
    map.set(achievement.description, tasksStatus)
  );

  return map;
}

export default calculateAchievementsStatus;

import { Achievement } from '../../../interfaces/achievement';
import { Status } from '../../../interfaces/status';

export function calculateAchievementsStatus(
  achievements: Achievement[],
  tasksStatus: Map<string, Status>
): Map<string, Status> {
  const map = new Map<string, Status>();

  achievements.forEach((achievement: Achievement) =>
    map.set(achievement._id, achievement.checkComplete(tasksStatus))
  );

  return map;
}

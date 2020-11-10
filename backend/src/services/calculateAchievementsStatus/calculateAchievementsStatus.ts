import StatusState from '../../constants/statusState';
import Achievement from '../../interfaces/achievement';
import Status from '../../interfaces/status';

function calculateAchievementsStatus(
  achievements: Achievement[],
  tasksStatus: Map<string, Status>
): Map<string, Status> {
  const map = new Map<string, Status>();

  achievements.forEach((achievement) =>
    map.set(achievement.description, {
      state: StatusState.Pending,
      updated: new Date(),
    })
  );

  return map;
}

export default calculateAchievementsStatus;

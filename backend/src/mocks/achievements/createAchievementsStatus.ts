import { StatusState } from '../../constants/statusState';
import { Achievement } from '../../interfaces/achievement';
import { Status } from '../../interfaces/status';
import { AchievementData } from '../../types/AchievementData';

export function createAchievementsStatus(
  achievements: AchievementData[],
  accomplishedAchievements: number
): Map<string, Status> {
  const date = new Date('September 1, 2020 00:00:00');
  const achievementsStatus = new Map<string, Status>();

  achievements.forEach((achievement: Achievement, i: number): void => {
    achievementsStatus.set(achievement.id, {
      state:
        i + 1 > accomplishedAchievements
          ? StatusState.Pending
          : StatusState.Success,
      updated: date,
    });
  });

  return achievementsStatus;
}

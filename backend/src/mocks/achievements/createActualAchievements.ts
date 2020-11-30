import { StatusState } from '../../constants/statusState';
import { ActualAchievement } from '../../interfaces/actualAchievement';
import { AchievementData } from '../../types/AchievementData';

export function createActualAchievements(
  achievements: AchievementData[],
  accomplishedAchievements: number
): ActualAchievement[] {
  const date: Date = new Date('September 1, 2020 00:00:00');
  const actualAchievements: ActualAchievement[] = [...achievements].map(
    (achievement: AchievementData, i: number): ActualAchievement => {
      return {
        ...achievement,
        status: {
          state:
            i + 1 > accomplishedAchievements
              ? StatusState.Pending
              : StatusState.Success,
          updated: date,
        },
      };
    }
  );

  return actualAchievements;
}

import { StatusState } from '../constants/statusState';
import { ActualAchievement } from '../interfaces/actualAchievement';
import { Achievement } from '../interfaces/achievement';
import { Status } from '../interfaces/status';
import { AchievementData } from '../types/AchievementData';

export function createAchievements(
  achievements: AchievementData[],
  date: Date
): Achievement[] {
  return achievements.map((achievement: AchievementData) => ({
    ...achievement,
    checkComplete: function (): Status {
      return {
        state: StatusState.Success,
        updated: date,
      };
    },
  }));
}

export function createActualAchievements(
  achievements: AchievementData[],
  accomplishedAchievements: number
): ActualAchievement[] {
  const date = new Date('September 1, 2020 00:00:00');
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

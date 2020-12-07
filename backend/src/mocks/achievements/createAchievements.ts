import { v4 as uuidv4 } from 'uuid';

import { StatusState } from '../../constants/statusState';
import { Achievement } from '../../interfaces/achievement';
import { Status } from '../../interfaces/status';
import { AchievementData } from '../../types/AchievementData';

export function createAchievements(
  achievements: AchievementData[],
  date: Date
): Achievement[] {
  return achievements.map((achievement: AchievementData) => ({
    ...achievement,
    _id: uuidv4(),
    checkComplete: function (): Status {
      return {
        state: StatusState.Success,
        updated: date,
      };
    },
  }));
}

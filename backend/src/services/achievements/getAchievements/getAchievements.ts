import { AchievementDocument } from '../../../interfaces/achievementDocument';
import { AchievementModel } from '../../../models/Achievement';

export async function getAchievements(): Promise<AchievementDocument[]> {
  return await AchievementModel.find();
}

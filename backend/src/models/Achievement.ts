import { Schema, model } from 'mongoose';

import { AchievementDocument } from '../interfaces/achievementDocument';

const AchievementSchema: Schema = new Schema({
  description: String,
  image: String,
  isMandatory: Boolean,
});

export const AchievementModel = model<AchievementDocument>(
  'Achievement',
  AchievementSchema
);

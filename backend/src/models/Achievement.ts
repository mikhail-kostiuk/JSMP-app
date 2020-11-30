import { Schema, model } from 'mongoose';

import { AchievementDocument } from '../interfaces/achievementDocument';

const AchievementSchema: Schema = new Schema({
  description: { type: String },
});

export const Achievement = model<AchievementDocument>(
  'Achievement',
  AchievementSchema
);

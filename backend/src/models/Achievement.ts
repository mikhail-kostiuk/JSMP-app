import { Schema, model } from 'mongoose';

import { AchievementDocument } from '../types/AchievementDocument';

export const Achievement = model<AchievementDocument>(
  'Achievement',
  new Schema({
    description: { type: String },
  })
);

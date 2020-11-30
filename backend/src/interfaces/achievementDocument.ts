import { Document } from 'mongoose';
import { Achievement } from './achievement';

export interface AchievementDocument extends Document, Achievement {
  readonly id: string;
}

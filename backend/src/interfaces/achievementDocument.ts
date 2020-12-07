import { Document } from 'mongoose';
import { Achievement } from './achievement';

export interface AchievementDocument
  extends Omit<Achievement, '_id'>,
    Document {}

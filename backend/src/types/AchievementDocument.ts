import { Document } from 'mongoose';

import { Achievement } from '../interfaces/achievement';

export type AchievementDocument = Achievement & Document;

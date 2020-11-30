import { Document } from 'mongoose';
import { Challenge } from './challenge';

export interface ChallengeDocument extends Document, Omit<Challenge, '_id'> {}

import { Document } from 'mongoose';

import { Challenge } from '../interfaces/challenge';

export type ChallengeDocument = Challenge & Document;

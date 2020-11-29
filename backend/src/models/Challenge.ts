import { Schema, model, Types} from 'mongoose';

import { ChallengeDocument } from '../types/ChallengeDocument';

export const ChallengeModel = model<ChallengeDocument>(
  'Challenge',
  new Schema({
    state: String,
    startDate: Date,
    tasksOrder: [{ type: Types.ObjectId, ref: 'Task' }],
    tasksStatus: {
      type: Types.Map,
      of: {
        state: String,
        updated: Date,
      },
    },
    tasksArchive: [
      {
        id: String,
        description: String,
        status: {
          state: String,
          updated: Date,
        },
      },
    ],
    achievementsStatus: {
      type: Types.Map,
      of: {
        state: String,
        updated: Date,
      },
    },
  })
);

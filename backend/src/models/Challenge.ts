import { Schema, model, Types } from 'mongoose';

import { ChallengeDocument } from '../interfaces/challengeDocument';

const ChallengeSchema: Schema = new Schema({
  state: String,
  startDate: Date,
  tasksOrder: [{ type: Types.ObjectId, ref: 'Task' }],
  tasksStatus: {
    type: Map,
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
    type: Map,
    of: {
      state: String,
      updated: Date,
    },
  },
});

export const ChallengeModel = model<ChallengeDocument>(
  'Challenge',
  ChallengeSchema
);

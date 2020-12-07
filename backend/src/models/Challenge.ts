import { Schema, model } from 'mongoose';

import { ChallengeDocument } from '../interfaces/challengeDocument';

const ChallengeSchema: Schema = new Schema({
  state: String,
  startDate: Date,
  tasksOrder: [{ _id: String, description: String }],
  tasksStatus: {
    type: Map,
    of: Schema.Types.Mixed,
  },
  tasksArchive: [
    {
      _id: String,
      description: String,
      status: {
        state: String,
        updated: Date,
      },
    },
  ],
  achievements: [
    { _id: String, description: String, image: String, isMandatory: Boolean },
  ],
  achievementsStatus: {
    type: Map,
    of: Schema.Types.Mixed,
  },
});

export const ChallengeModel = model<ChallengeDocument>(
  'Challenge',
  ChallengeSchema
);

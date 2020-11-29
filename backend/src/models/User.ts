import { Schema, model } from 'mongoose';

import { UserDocument } from '../types/UserDocument';

export const User = model<UserDocument>(
  'User',
  new Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    activeChallengeId: { type: String },
  })
);

import { Schema, model, Model } from 'mongoose';
import { hash, compare } from 'bcrypt';

import { UserDocument } from '../interfaces/userDocument';

const UserSchema: Schema = new Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  activeChallengeId: { type: String },
});

UserSchema.pre('save', async function (
  this: UserDocument,
  next
): Promise<void> {
  const hashedPassword: string = await hash(this.password, 10);

  this.password = hashedPassword;
  next();
});

UserSchema.methods.isValidPassword = async function (
  this: UserDocument,
  password
): Promise<boolean> {
  const isValid: boolean = await compare(password, this.password);

  return isValid;
};

export const UserModel: Model<UserDocument> = model<UserDocument>(
  'User',
  UserSchema
);

import { Document } from 'mongoose';

import { User } from './user';

export interface UserDocument extends Omit<User, '_id'>, Document {
  isValidPassword(password: string): boolean;
}

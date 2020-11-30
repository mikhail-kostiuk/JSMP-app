import { Document } from 'mongoose';

import { User } from './user';

export interface UserDocument extends Document, User {
  isValidPassword(password: string): boolean;
}

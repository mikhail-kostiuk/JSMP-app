import { Document } from 'mongoose';

import { User } from '../interfaces/user';

export type UserDocument = User & Document;

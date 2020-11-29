import { Document } from 'mongoose';

import { Task } from '../interfaces/task';

export type TaskDocument = Task & Document;

import { Document } from 'mongoose';
import { Task } from './Task';

export interface TaskDocument extends Omit<Task, '_id'>, Document {}

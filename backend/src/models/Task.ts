import { Schema, model } from 'mongoose';

import { TaskDocument } from '../types/TaskDocument';

export const TaskModel = model<TaskDocument>(
  'Task',
  new Schema({
    description: { type: String },
  })
);

import { Schema, model } from 'mongoose';

import { TaskDocument } from '../interfaces/taskDocument';

const TaskSchema: Schema = new Schema({
  description: String,
});

export const TaskModel = model<TaskDocument>('Task', TaskSchema);

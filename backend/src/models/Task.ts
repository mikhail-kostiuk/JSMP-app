import { Schema, model, Types } from 'mongoose';

import { TaskDocument } from '../interfaces/taskDocument';

const TaskSchema: Schema = new Schema({
  description: { type: String },
});

export const TaskModel = model<TaskDocument>('Task', TaskSchema);

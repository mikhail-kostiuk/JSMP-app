import { TaskModel } from '../../../models/Task';
import { TaskDocument } from '../../../types/TaskDocument';

export async function getTasks(): Promise<TaskDocument[]> {
  return await TaskModel.find();
}

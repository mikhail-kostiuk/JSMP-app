import { TaskDocument } from '../../../interfaces/taskDocument';
import { TaskModel } from '../../../models/Task';

export async function getTasks(): Promise<TaskDocument[]> {
  return await TaskModel.find();
}

import { Status } from '../interfaces/status';

export interface Achievement {
  id: string;
  description: string;
  image: string;
  checkComplete(tasksStatus: Map<string, Status>): Status;
}

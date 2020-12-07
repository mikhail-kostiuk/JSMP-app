import { Status } from '../interfaces/status';

export interface Achievement {
  _id: string;
  description: string;
  image: string;
  isMandatory: boolean;
  checkComplete?(tasksStatus: Map<string, Status>): Status;
}

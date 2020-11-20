import { Task } from './task';
import { Status } from './status';

export interface ActualTask extends Task {
  status: Status;
}

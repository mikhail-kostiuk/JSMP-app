import Task from './task';
import Status from './status';

interface ActualTask extends Task {
  status: Status;
}

export default ActualTask;

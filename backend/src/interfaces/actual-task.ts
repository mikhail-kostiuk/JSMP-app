import Task from '../interfaces/task';
import Status from '../interfaces/status';

interface ActualTask extends Task {
  status: Status;
}

export default ActualTask;

import Task from '../interfaces/task';
import Status from '../interfaces/status';

interface ArchiveItem extends Task {
  status: Status;
}

export default ArchiveItem;

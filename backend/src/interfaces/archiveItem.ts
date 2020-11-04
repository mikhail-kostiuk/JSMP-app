import Task from './task';
import Status from './status';

interface ArchiveItem extends Task {
  status: Status;
}

export default ArchiveItem;

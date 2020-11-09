import StatusState from '../constants/statusState';
import ArchiveItem from '../interfaces/archiveItem';
import tasks from '../tasks.json';

const archivedItems: ArchiveItem[] = [...tasks].map((task) => ({
  ...task,
  status: {
    state: StatusState.Success,
    updated: new Date('November 1, 2020 00:00:00'),
  },
}));

export default archivedItems;

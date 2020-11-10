import StatusState from '../constants/statusState';
import ArchiveItem from '../interfaces/archiveItem';
import Task from '../interfaces/task';
import tasks from '../tasks.json';
import addDaysToDate from '../utils/addDaysToDate';

const date = new Date('September 1, 2020 00:00:00');
const archivedItems: ArchiveItem[] = [...tasks].map(
  (task: Task, i: number): ArchiveItem => ({
    ...task,
    status: {
      state: StatusState.Success,
      updated: addDaysToDate(date, i + 1),
    },
  })
);

export default archivedItems;

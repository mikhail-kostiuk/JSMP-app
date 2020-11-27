import { StatusState } from '../../constants/statusState';
import { ArchiveItem } from '../../interfaces/archiveItem';
import { Task } from '../../interfaces/task';
import { addDaysToDate } from '../../utils/addDaysToDate';

export function createTasksArchive(
  tasks: Task[],
  startDate: Date,
  isChallengeCompleted: boolean,
  dayOfChallenge?: number
): ArchiveItem[] {
  const archivedItems: ArchiveItem[] = [];

  if (dayOfChallenge > tasks.length) {
    isChallengeCompleted = true;
  }

  const archivedTasksCount = isChallengeCompleted
    ? tasks.length
    : dayOfChallenge;

  for (let i = 0; i < archivedTasksCount; i++) {
    archivedItems.push({
      ...tasks[i],
      status: {
        state: StatusState.Success,
        updated: addDaysToDate(startDate, i + 1),
      },
    });
  }

  if (!isChallengeCompleted) {
    archivedItems[archivedItems.length - 1].status.state = StatusState.Pending;
  }

  return archivedItems;
}

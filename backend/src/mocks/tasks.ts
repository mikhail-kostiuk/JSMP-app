import { StatusState } from '../constants/statusState';
import { ArchiveItem } from '../interfaces/archiveItem';
import { Status } from '../interfaces/status';
import { Task } from '../interfaces/task';
import { addDaysToDate } from '../utils/addDaysToDate';

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

export function createTasksStatus(
  tasks: Task[],
  startDate: Date,
  isChallengeCompleted: boolean,
  dayOfChallenge?: number
): Map<string, Status> {
  if (dayOfChallenge > tasks.length) {
    isChallengeCompleted = true;
  }

  const tasksStatus = new Map<string, Status>();
  const activatedTasksCount = isChallengeCompleted
    ? tasks.length
    : dayOfChallenge;

  for (let i = 0; i < activatedTasksCount; i++) {
    const task = tasks[i];

    tasksStatus.set(task.id, {
      state: StatusState.Success,
      updated: addDaysToDate(startDate, i + 1),
    });
  }

  if (!isChallengeCompleted) {
    tasksStatus.set(tasks[activatedTasksCount].id, {
      state: StatusState.Pending,
      updated: addDaysToDate(startDate, activatedTasksCount + 1),
    });
  }

  return tasksStatus;
}

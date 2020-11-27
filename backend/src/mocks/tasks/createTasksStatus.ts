import { StatusState } from '../../constants/statusState';
import { Status } from '../../interfaces/status';
import { Task } from '../../interfaces/task';
import { addDaysToDate } from '../../utils/addDaysToDate';

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

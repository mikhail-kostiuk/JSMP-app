import { StatusState } from '../../../constants/statusState';
import { Challenge } from '../../../interfaces/challenge';
import { Status } from '../../../interfaces/status';
import { Task } from '../../../interfaces/task';
import { User } from '../../../interfaces/user';
import { calculateDatesDifference } from '../../../utils/calculateDatesDifference';
import { getChallenge } from '../../challenges/getChallenge/getChallenge';
import { updateChallenge } from '../../challenges/updateChallenge/updateChallenge';
import { getUser } from '../../users/getUser/getUser';

export function completeCurrentTask(statusState: StatusState): void {
  const user: User = getUser();
  const challenge: Challenge = getChallenge(user.activeChallengeId);
  const currentDate: Date = new Date();
  const dayOfChallenge: number =
    calculateDatesDifference(challenge.startDate, currentDate) + 1;
  const currentTask: Task = challenge.tasksOrder[dayOfChallenge - 1];
  const currentTaskStatus: Status = challenge.tasksStatus.get(currentTask.id);

  if (currentTaskStatus.state === StatusState.Pending) {
    const newStatus: Status = {
      state: statusState,
      updated: currentDate,
    };
    challenge.tasksStatus.set(currentTask.id, newStatus);
    challenge.tasksArchive.push({
      ...currentTask,
      status: newStatus,
    });

    updateChallenge(challenge.id, {
      tasksStatus: challenge.tasksStatus,
      tasksArchive: challenge.tasksArchive,
    });
  }
}

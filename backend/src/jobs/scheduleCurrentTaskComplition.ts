import schedule from 'node-schedule';

import { StatusState } from '../constants/statusState';
import { Challenge } from '../interfaces/challenge';
import { Status } from '../interfaces/status';
import { Task } from '../interfaces/task';
import { User } from '../interfaces/user';
import { getChallenge } from '../services/challenges/getChallenge/getChallenge';
import { updateChallenge } from '../services/challenges/updateChallenge/updateChallenge';
import { getUser } from '../services/users/getUser/getUser';
import { calculateDatesDifference } from '../utils/calculateDatesDifference';

export function scheduleCurrentTaskComplition(): void {
  schedule.scheduleJob({ hour: 12 }, () => {
    const user: User = getUser();
    const challenge: Challenge = getChallenge(user.activeChallengeId);
    const currentDate: Date = new Date();
    const dayOfChallenge: number =
      calculateDatesDifference(challenge.startDate, currentDate) + 1;
    const currentTask: Task = challenge.tasksOrder[dayOfChallenge - 1];
    const currentTaskStatus: Status = challenge.tasksStatus.get(currentTask.id);

    if (currentTaskStatus.state === StatusState.Pending) {
      const newStatus: Status = {
        state: StatusState.Failure,
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
  });
}

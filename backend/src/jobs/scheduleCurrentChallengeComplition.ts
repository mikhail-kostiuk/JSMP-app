import schedule from 'node-schedule';

import { Challenge } from '../interfaces/challenge';
import { User } from '../interfaces/user';
import { getChallenge } from '../services/challenges/getChallenge/getChallenge';
import { getUser } from '../services/users/getUser/getUser';
import { addDaysToDate } from '../utils/addDaysToDate';
import { completeCurrentTask } from '../services/tasks/completeCurrentTask/completeCurrentTask';
import { StatusState } from '../constants/statusState';

export function scheduleCurrentChallengeComplition(): void {
  const user: User = getUser();
  const challenge: Challenge = getChallenge(user.activeChallengeId);
  const challengeEndDate: Date = addDaysToDate(challenge.startDate, 30);

  schedule.scheduleJob(challengeEndDate, function () {
    completeCurrentTask(StatusState.Failure);
  });
}

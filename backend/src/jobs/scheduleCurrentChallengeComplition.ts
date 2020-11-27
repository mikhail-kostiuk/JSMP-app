import schedule from 'node-schedule';

import { Challenge } from '../interfaces/challenge';
import { User } from '../interfaces/user';
import { getChallenge } from '../services/challenges/getChallenge/getChallenge';
import { getUser } from '../services/users/getUser/getUser';
import { addDaysToDate } from '../utils/addDaysToDate';
import { updateChallenge } from '../services/challenges/updateChallenge/updateChallenge';
import { ChallengeState } from '../constants/challengeState';

export function scheduleCurrentChallengeComplition(): void {
  const user: User = getUser();
  const challenge: Challenge = getChallenge(user.activeChallengeId);
  const challengeEndDate: Date = addDaysToDate(challenge.startDate, 30);

  schedule.scheduleJob(challengeEndDate, () => {
    const user: User = getUser();
    const challenge: Challenge = getChallenge(user.activeChallengeId);
    updateChallenge(challenge.id, { state: ChallengeState.Success });
  });
}

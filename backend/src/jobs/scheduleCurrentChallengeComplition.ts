import schedule from 'node-schedule';

import { Challenge } from '../interfaces/challenge';
import { User } from '../interfaces/user';
import { getChallenge } from '../services/challenges/getChallenge/getChallenge';
import { getUser } from '../services/users/getUser/getUser';
import { addDaysToDate } from '../utils/addDaysToDate';
import { updateChallenge } from '../services/challenges/updateChallenge/updateChallenge';
import { ChallengeState } from '../constants/challengeState';

export async function scheduleCurrentChallengeComplition(
  email: string
): Promise<void> {
  const user: User = await getUser(email);

  if (!user || !user.activeChallengeId) {
    return;
  }

  const challenge: Challenge = await getChallenge(user.activeChallengeId);

  if (!challenge) {
    return;
  }
  const challengeEndDate: Date = addDaysToDate(challenge.startDate, 30);

  schedule.scheduleJob(
    challengeEndDate,
    async (): Promise<void> => {
      const user: User = await getUser(email);
      const challenge: Challenge = await getChallenge(user.activeChallengeId);
      updateChallenge(challenge._id, { state: ChallengeState.Success });
    }
  );
}

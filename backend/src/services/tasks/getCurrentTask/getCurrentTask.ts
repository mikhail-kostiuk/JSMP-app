import { ActualTask } from '../../../interfaces/actualTask';
import { Challenge } from '../../../interfaces/challenge';
import { StatusState } from '../../../constants/statusState';
import { calculateDatesDifference } from '../../../utils/calculateDatesDifference';
import { ChallengeModel } from '../../../models/Challenge';
import { ChallengeDocument } from '../../../interfaces/challengeDocument';

export async function getCurrentTask(
  challengeId: string
): Promise<ActualTask | null> {
  const challenge: ChallengeDocument = await ChallengeModel.findById(
    challengeId
  );

  if (!challenge) {
    return null;
  }

  const currentDate = new Date();
  const dayOfChallenge =
    calculateDatesDifference(challenge.startDate, currentDate) + 1;

  return {
    ...challenge.tasksOrder[dayOfChallenge - 1],
    status: { state: StatusState.Pending, updated: currentDate },
  };
}

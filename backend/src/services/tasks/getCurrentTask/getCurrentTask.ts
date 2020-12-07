import { ActualTask } from '../../../interfaces/actualTask';
import { StatusState } from '../../../constants/statusState';
import { calculateDatesDifference } from '../../../utils/calculateDatesDifference';
import { ChallengeModel } from '../../../models/Challenge';
import { ChallengeDocument } from '../../../interfaces/challengeDocument';
import { Task } from '../../../interfaces/task';

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
  const task: Task = challenge.tasksOrder[dayOfChallenge - 1];

  return {
    _id: task._id,
    description: task.description,
    status: { state: StatusState.Pending, updated: currentDate },
  };
}

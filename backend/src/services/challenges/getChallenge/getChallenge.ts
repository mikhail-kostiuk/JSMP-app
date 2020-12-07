import { Challenge } from '../../../interfaces/challenge';
import { ChallengeDocument } from '../../../interfaces/challengeDocument';
import { ChallengeModel } from '../../../models/Challenge';

export async function getChallenge(challengeId: string): Promise<Challenge> {
  const challengeDocument: ChallengeDocument = await ChallengeModel.findById(
    challengeId
  );

  return {
    _id: challengeDocument._id,
    state: challengeDocument.state,
    startDate: challengeDocument.startDate,
    tasksOrder: challengeDocument.tasksOrder,
    tasksStatus: challengeDocument.tasksStatus,
    tasksArchive: challengeDocument.tasksArchive,
    achievements: challengeDocument.achievements,
    achievementsStatus: challengeDocument.achievementsStatus,
  };
}

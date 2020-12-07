import { Types } from 'mongoose';

import { Challenge } from '../../../interfaces/challenge';
import { ChallengeModel } from '../../../models/Challenge';

export async function updateChallenge(
  challengeId: string | Types.ObjectId,
  fieldsToUpdate: Partial<Challenge>
): Promise<void> {
  await ChallengeModel.updateOne({ _id: challengeId }, fieldsToUpdate);
}

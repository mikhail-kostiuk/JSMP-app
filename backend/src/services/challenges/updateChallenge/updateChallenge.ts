import { Types } from 'mongoose';

import { Challenge } from '../../../interfaces/challenge';

export function updateChallenge(
  challengeId: string | Types.ObjectId,
  fieldsToUpdate: Partial<Challenge>
) {
  // TODO: Actually update the db record
}

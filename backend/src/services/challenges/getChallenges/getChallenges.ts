import { ChallengeModel } from '../../../models/Challenge';
import { ChallengeDocument } from '../../../interfaces/challengeDocument';

export async function getChallenges(): Promise<ChallengeDocument[]> {
  return await ChallengeModel.find();
}

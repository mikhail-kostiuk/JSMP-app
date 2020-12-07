import { ArchiveItem } from '../../../interfaces/archiveItem';
import { ChallengeDocument } from '../../../interfaces/challengeDocument';
import { ChallengeModel } from '../../../models/Challenge';

export async function getTaskArchive(
  challengeId: string
): Promise<ArchiveItem[] | null> {
  const challenge: ChallengeDocument = await ChallengeModel.findById(
    challengeId
  );

  if (!challenge) {
    return null;
  }

  return challenge.tasksArchive;
}

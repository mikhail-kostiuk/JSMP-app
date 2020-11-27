import { ArchiveItem } from '../../../interfaces/archiveItem';
import { Challenge } from '../../../interfaces/challenge';

export function getTaskArchive(
  challengeId: string,
  challenges: Challenge[]
): ArchiveItem[] | null {
  const challenge: Challenge = challenges.find(
    (challenge) => challenge.id === challengeId
  );

  if (!challenge) {
    return null;
  }

  return challenge.tasksArchive;
}

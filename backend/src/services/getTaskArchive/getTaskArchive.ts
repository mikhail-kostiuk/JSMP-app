import ArchiveItem from '../../interfaces/archiveItem';
import Challenge from '../../interfaces/challenge';

function getTaskArchive(
  challengeId: string,
  challenges: Challenge[]
): ArchiveItem[] | null {
  const challenge: Challenge = challenges.find(
    (challenge) => challenge.id === challengeId
  );

  if (!challenge) {
    return null;
  }

  return challenge.archiveTasks;
}

export default getTaskArchive;

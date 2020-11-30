import achievements from '../../../achievements.json';
import tasks from '../../../tasks.json';
import { ChallengeState } from '../../../constants/challengeState';
import { Challenge } from '../../../interfaces/challenge';
import { createAchievementsStatus } from '../../../mocks/achievements/createAchievementsStatus';
import { createTasksStatus } from '../../../mocks/tasks/createTasksStatus';
import { createTasksArchive } from '../../../mocks/tasks/createTasksArchive';
import { ChallengeDocument } from '../../../interfaces/challengeDocument';
import { ChallengeModel } from '../../../models/Challenge';

export async function getChallenge(challengeId: string): Promise<Challenge> {
  console.log(challengeId);

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
    achievementsStatus: challengeDocument.achievementsStatus,
  };
}

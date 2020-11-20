import ActualTask from '../../../interfaces/actualTask';
import Challenge from '../../../interfaces/challenge';
import StatusState from '../../../constants/statusState';
import calculateDatesDifference from '../../../utils/calculateDatesDifference';

function getCurrentTask(
  challengeId: string,
  challenges: Challenge[],
  date: Date
): ActualTask | null {
  const challenge: Challenge = challenges.find(
    (challenge) => challenge.id === challengeId
  );

  if (!challenge) {
    return null;
  }

  const dayOfChallenge =
    calculateDatesDifference(challenge.startDate, date) + 1;

  return {
    ...challenge.tasksOrder[dayOfChallenge - 1],
    status: { state: StatusState.Pending, updated: date },
  };
}

export default getCurrentTask;

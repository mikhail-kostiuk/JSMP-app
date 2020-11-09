import Challenge from '../../interfaces/challenge';
import Task from '../../interfaces/task';
import StatusState from '../../constants/statusState';
import ChallengeState from '../../constants/challengeState';
import shuffleArray from '../../utils/shuffleArray';

function startNewChallenge(
  tasks: Task[],
  challenges: Challenge[],
  duration: number = 30,
  achievements: number = Math.floor(duration / 6)
): Challenge {
  const shuffledTasks: Task[] = shuffleArray([...tasks]);
  const currentDate = new Date();

  return {
    id: 'TODO',
    state: ChallengeState.In_progress,
    startDate: currentDate,
    tasksOrder: shuffledTasks.slice(0, 30),
    tasksStatus: { state: StatusState.Pending, updated: currentDate },
    achievementsStatus: { state: StatusState.Pending, updated: currentDate },
  };
}

export default startNewChallenge;

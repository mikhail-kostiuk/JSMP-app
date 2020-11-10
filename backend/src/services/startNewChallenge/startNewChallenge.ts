import Challenge from '../../interfaces/challenge';
import Task from '../../interfaces/task';
import StatusState from '../../constants/statusState';
import ChallengeState from '../../constants/challengeState';
import shuffleArray from '../../utils/shuffleArray';
import Status from '../../interfaces/status';

function startNewChallenge(
  tasks: Task[],
  challenges: Challenge[],
  duration: number = 30,
  achievements: number = Math.floor(duration / 6),
  startDate: Date
): Challenge {
  const shuffledTasks: Task[] = shuffleArray([...tasks]);
  const currentDate = new Date();

  return {
    id: 'TODO',
    state: ChallengeState.In_progress,
    startDate,
    tasksOrder: shuffledTasks.slice(0, 30),
    tasksStatus: new Map<string, Status>(),
    achievementsStatus: new Map<string, Status>(),
  };
}

export default startNewChallenge;

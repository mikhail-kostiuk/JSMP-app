import Task from '../interfaces/task';
import Status from '../interfaces/status';
import ChallengeState from '../constants/challenge-state';

interface Challenge {
  id: string;
  state: ChallengeState;
  startDate: Date;
  tasksOrder: Task[];
  tasksStatus: Status;
  achievementsStatus: Status;
}

export default Challenge;

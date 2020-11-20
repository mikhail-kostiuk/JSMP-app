import Task from '../interfaces/task';
import Status from '../interfaces/status';
import ChallengeState from '../constants/challengeState';
import ArchiveItem from './archiveItem';

interface Challenge {
  id: string;
  state: ChallengeState;
  startDate: Date;
  tasksOrder: Task[];
  tasksStatus: Map<string, Status>;
  tasksArchive?: ArchiveItem[];
  achievementsStatus: Map<string, Status>;
}

export default Challenge;

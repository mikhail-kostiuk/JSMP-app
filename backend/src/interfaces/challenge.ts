import Task from '../interfaces/task';
import Status from '../interfaces/status';
import ChallengeState from '../constants/challengeState';
import Achievement from './achievement';
import ArchiveItem from './archiveItem';
import ActualAchievement from './actualAchievement';

interface Challenge {
  id: string;
  state: ChallengeState;
  startDate: Date;
  tasksOrder: Task[];
  tasksStatus: Map<string, Status>;
  tasksArchive?: ArchiveItem[];
  achievements?: Achievement[];
  achievementsStatus: Map<string, Status>;
  actualAchievements?: ActualAchievement[];
}

export default Challenge;

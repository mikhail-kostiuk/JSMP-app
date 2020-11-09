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
  tasksStatus: Status;
  achievements?: Achievement[];
  achievementsStatus: Status;
  actualAchievements?: ActualAchievement[];
  archiveTasks?: ArchiveItem[];
}

export default Challenge;

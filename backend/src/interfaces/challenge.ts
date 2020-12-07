import { Task } from '../interfaces/task';
import { Status } from '../interfaces/status';
import { ChallengeState } from '../constants/challengeState';
import { ArchiveItem } from './archiveItem';
import { Achievement } from './achievement';

export interface Challenge {
  _id: string;
  state: ChallengeState;
  startDate: Date;
  tasksOrder: Task[];
  tasksStatus: Map<string, Status>;
  tasksArchive?: ArchiveItem[];
  achievements: Achievement[];
  achievementsStatus: Map<string, Status>;
}

import { Achievement } from './achievement';
import { Status } from './status';

export interface ActualAchievement extends Omit<Achievement, 'checkComplete'> {
  status: Status;
}

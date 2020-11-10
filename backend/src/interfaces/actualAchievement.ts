import Achievement from './achievement';
import Status from './status';

interface ActualAchievement extends Omit<Achievement, 'checkComplete'> {
  status: Status;
}

export default ActualAchievement;

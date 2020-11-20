import Status from '../interfaces/status';

interface Achievement {
  id: string;
  description: string;
  image: string;
  checkComplete(tasksStatus: Map<string, Status>): Status;
}

export default Achievement;

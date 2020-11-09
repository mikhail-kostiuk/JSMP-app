import Status from '../interfaces/status';

interface Achievement {
  id: string;
  description: string;
  image: string;
  checkComplete?(): Status;
  status?: Status;
}

export default Achievement;

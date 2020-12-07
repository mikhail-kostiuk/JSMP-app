import schedule from 'node-schedule';

import { StatusState } from '../constants/statusState';
import { completeCurrentTask } from '../services/tasks/completeCurrentTask/completeCurrentTask';

export function scheduleCurrentTaskComplition(email: string): void {
  schedule.scheduleJob({ hour: 12 }, () => {
    completeCurrentTask(email, StatusState.Failure);
  });
}

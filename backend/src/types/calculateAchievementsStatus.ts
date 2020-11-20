import { Achievement } from '../interfaces/achievement';
import { Status } from '../interfaces/status';

/**
 * Returns achievements status for the challenge by its achievements list and tasks status
 * @param achievements The tasks status
 * @returns The achievements status
 */
export type CalculateAchievementsStatus = (
  achievements: Achievement[],
  tasksStatus: Status
) => Map<string, Status>;

import Task from '../interfaces/task';
import Challenge from '../interfaces/challenge';

/**
 * Returns a new challenge
 * @param tasks The list of tasks
 * @param challenges The list of challenges
 * @param duration The challenge duration
 * @param achievements The number of achievements
 * @returns The new challange
 */
type StartNewChallenge = (
  tasks: Task[],
  challenges: Challenge[],
  duration: number,
  achievements: number
) => Challenge;

export default StartNewChallenge;

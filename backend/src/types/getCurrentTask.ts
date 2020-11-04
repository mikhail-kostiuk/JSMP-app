import Task from '../interfaces/task';

/**
 * Returns a current task with its status by the challenge id
 * @param challengeId The id of the challenge
 * @returns The current task
 */
type GetCurrentTask = (challengeId: string) => Task;

export default GetCurrentTask;

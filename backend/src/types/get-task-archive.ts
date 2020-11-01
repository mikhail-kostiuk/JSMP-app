import Task from '../interfaces/task';

/**
 * Returns all past tasks with their results by the challenge id
 * @param challengeId The id of the challenge
 * @returns The past tasks
 */
type GetTaskArchive = (challengeId: string) => Task;

export default GetTaskArchive;

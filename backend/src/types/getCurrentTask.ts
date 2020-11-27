import { ActualTask } from '../interfaces/actualTask';

/**
 * Returns a current task with its status by the challenge id
 * @param challengeId The id of the challenge
 * @returns The current task
 */
export type GetCurrentTask = (challengeId: string) => ActualTask;

import { Achievement } from '../interfaces/achievement';

/**
 * Returns a list of actual achievements by the challenge id
 * @param challengeId The id of the challenge
 * @returns The list of actual achievements
 */
export type GetAchievements = (challengeId: string) => Achievement[];

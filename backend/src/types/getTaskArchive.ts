import { ArchiveItem } from '../interfaces/archiveItem';

/**
 * Returns all past tasks with their results by the challenge id
 * @param challengeId The id of the challenge
 * @returns The past tasks
 */
export type GetTaskArchive = (challengeId: string) => ArchiveItem[];

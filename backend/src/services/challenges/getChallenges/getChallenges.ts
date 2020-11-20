import { Challenge } from '../../../interfaces/challenge';
import tasks from '../../../tasks.json';
import achievements from '../../../achievements.json';
import { createAchievements } from '../../../mocks/achievements/createAchievements';
import { createNewChallenge } from '../../../mocks/challenges/createNewChallenge';

export function getChallenges(): Challenge[] {
  // TODO: Actually query db
  const date = new Date('September 1, 2020 00:00:00');

  const challenges: Challenge[] = [];
  for (let i = 0; i < 3; i++) {
    const challenge = createNewChallenge(
      i.toString(),
      date,
      tasks,
      30,
      createAchievements(achievements, date),
      5
    );

    challenges.push(challenge);
  }
  return challenges;
}

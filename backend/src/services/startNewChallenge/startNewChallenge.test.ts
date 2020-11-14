import startNewChallenge from './startNewChallenge';
import tasks from '../../tasks.json';
import achievements from '../../achievements.json';
import { createAchievements } from '../../mocks/achievements';
import ChallengeState from '../../constants/challengeState';
import StatusState from '../../constants/statusState';
import Challenge from '../../interfaces/challenge';

describe('startNewChallenge', () => {
  test("the new challenge should have state 'in progress'", () => {
    const expectedResult: ChallengeState = ChallengeState.In_progress;
    const actualResult: ChallengeState = startNewChallenge(
      tasks,
      30,
      createAchievements(achievements),
      5
    ).state;

    expect(actualResult).toEqual(expectedResult);
  });

  test('the new challenge should have tasks count equal to its duration', () => {
    const expectedResult = 30;
    const actualResult: number = startNewChallenge(
      tasks,
      30,
      createAchievements(achievements),
      5
    ).tasksOrder.length;

    expect(actualResult).toEqual(expectedResult);
  });

  test("the new challenge should have the states of all tasks 'pending'", () => {
    const newChallenge: Challenge = startNewChallenge(
      tasks,
      30,
      createAchievements(achievements),
      5
    );
    const expectedResult: StatusState[] = new Array(30).fill(
      StatusState.Pending
    );
    const actualResult: StatusState[] = [];
    for (const taskStatus of newChallenge.tasksStatus.values()) {
      actualResult.push(taskStatus.state);
    }

    expect(actualResult).toEqual(expectedResult);
  });
});

import achievements from '../achievements.json';
import ChallengeState from '../constants/challengeState';
import StatusState from '../constants/statusState';
import Achievement from '../interfaces/achievement';
import Challenge from '../interfaces/challenge';
import tasks from '../tasks.json';
import actualAchievements from './actualAchievements';

const date = new Date('November 1, 2020 00:00:00');
const challenges: Challenge[] = [
  {
    id: '8bd10917-47e3-429a-a925-9b77f2a498c9',
    state: ChallengeState.In_progress,
    startDate: date,
    tasksOrder: tasks,
    tasksStatus: { state: StatusState.Pending, updated: date },
    achievements: [...achievements].map((achievement: Achievement) => {
      achievement.checkComplete = function () {
        return { state: StatusState.Pending, updated: date };
      };

      return achievement;
    }),
    achievementsStatus: { state: StatusState.Pending, updated: date },
    actualAchievements,
  },
  {
    id: 'a4c0d2db-c245-4bfa-a73d-ac8fd82381b3',
    state: ChallengeState.In_progress,
    startDate: date,
    tasksOrder: tasks,
    tasksStatus: { state: StatusState.Pending, updated: date },
    achievements: [...achievements].map((achievement: Achievement) => {
      achievement.checkComplete = function () {
        return { state: StatusState.Pending, updated: date };
      };

      return achievement;
    }),
    achievementsStatus: { state: StatusState.Pending, updated: date },
    actualAchievements,
  },
];

export default challenges;

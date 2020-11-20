import achievements from '../achievements.json';
import ChallengeState from '../constants/challengeState';
import Challenge from '../interfaces/challenge';
import tasks from '../tasks.json';
import { createAchievementsStatus } from './achievements';
import { createTasksStatus, createTasksArchive } from './tasks';

const date = new Date('September 1, 2020 00:00:00');
const challenges: Challenge[] = [
  // The challenge in progress, day 5 of 30, none of the achievements accomplished
  {
    id: '8bd10917-47e3-429a-a925-9b77f2a498c9',
    state: ChallengeState.In_progress,
    startDate: date,
    tasksOrder: tasks,
    tasksStatus: createTasksStatus(tasks, date, false, 5),
    tasksArchive: createTasksArchive(tasks, date, false, 5),
    achievementsStatus: createAchievementsStatus(achievements, 0),
  },
  // The challenge finished, 2 achievements of 5 accomplished
  {
    id: '352a2632-5584-4ff6-8dbc-b5d430c0617f',
    state: ChallengeState.Success,
    startDate: date,
    tasksOrder: tasks,
    tasksStatus: createTasksStatus(tasks, date, true),
    tasksArchive: createTasksArchive(tasks, date, true),
    achievementsStatus: createAchievementsStatus(achievements, 2),
  },
  // The challenge finished, all 5 achievements accomplished
  {
    id: 'e8616afd-6511-4170-b4cb-323ff3057440',
    state: ChallengeState.Success,
    startDate: date,
    tasksOrder: tasks,
    tasksStatus: createTasksStatus(tasks, date, true),
    achievementsStatus: createAchievementsStatus(achievements, 5),
  },
];

export default challenges;

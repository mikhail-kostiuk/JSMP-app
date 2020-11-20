import achievements from '../achievements.json';
import { ChallengeState } from '../constants/challengeState';
import { StatusState } from '../constants/statusState';
import { Achievement } from '../interfaces/achievement';
import { Challenge } from '../interfaces/challenge';
import { Status } from '../interfaces/status';
import { Task } from '../interfaces/task';
import { calculateAchievementsStatus } from '../services/achievements/calculateAchievementsStatus/calculateAchievementsStatus';
import tasks from '../tasks.json';
import { shuffleArray } from '../utils/shuffleArray';
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

export function createNewChallenge(
  id: string,
  startDate: Date,
  tasks: Task[],
  duration = 30,
  achievements: Achievement[],
  achievementsNumber: number = Math.floor(duration / 6)
): Challenge {
  const currentDate = new Date();
  const shuffledTasks: Task[] = shuffleArray([...tasks]);
  const tasksStatus = new Map<string, Status>();
  const randomAchievements: Achievement[] = [
    ...achievements.slice(0, 2),
    ...shuffleArray(achievements.slice(2)),
  ].slice(0, achievementsNumber);

  shuffledTasks.forEach((task: Task): void => {
    tasksStatus.set(task.id, {
      state: StatusState.Pending,
      updated: currentDate,
    });
  });

  return {
    id,
    state: ChallengeState.In_progress,
    startDate,
    tasksOrder: shuffledTasks.slice(0, 30),
    tasksStatus: tasksStatus,
    achievementsStatus: calculateAchievementsStatus(
      randomAchievements,
      tasksStatus
    ),
  };
}

export default challenges;

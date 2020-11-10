import achievements from '../achievements.json';
import ChallengeState from '../constants/challengeState';
import StatusState from '../constants/statusState';
import Achievement from '../interfaces/achievement';
import Challenge from '../interfaces/challenge';
import Status from '../interfaces/status';
import Task from '../interfaces/task';
import tasks from '../tasks.json';
import actualAchievements from './actualAchievements';
import archivedItems from './archivedItems';
import addDaysToDate from '../utils/addDaysToDate';

const date = new Date('September 1, 2020 00:00:00');
const challenges: Challenge[] = [
  {
    id: '8bd10917-47e3-429a-a925-9b77f2a498c9',
    state: ChallengeState.In_progress,
    startDate: date,
    tasksOrder: tasks,
    tasksStatus: createTasksStatus(tasks, false, 5),
    tasksArchive: archivedItems,
    achievements: [...achievements].map((achievement: Achievement) => {
      achievement.checkComplete = function () {
        return { state: StatusState.Pending, updated: date };
      };

      return achievement;
    }),
    achievementsStatus: createAchievementsStatus(achievements),
    actualAchievements,
  },
  {
    id: 'a4c0d2db-c245-4bfa-a73d-ac8fd82381b3',
    state: ChallengeState.In_progress,
    startDate: date,
    tasksOrder: tasks,
    tasksStatus: createTasksStatus(tasks, false, 5),
    tasksArchive: archivedItems,
    achievements: [...achievements].map((achievement: Achievement) => {
      achievement.checkComplete = function () {
        return { state: StatusState.Pending, updated: date };
      };

      return achievement;
    }),
    achievementsStatus: createAchievementsStatus(achievements),
    actualAchievements,
  },
  {
    id: 'a4c0d2db-c245-4bfa-a73d-ac8fd82381b3',
    state: ChallengeState.Success,
    startDate: date,
    tasksOrder: tasks,
    tasksStatus: createTasksStatus(tasks, true),
    achievements: [...achievements].map((achievement: Achievement) => {
      achievement.checkComplete = function () {
        return { state: StatusState.Success, updated: date };
      };

      return achievement;
    }),
    achievementsStatus: createAchievementsStatus(achievements),
    actualAchievements,
  },
];

function createTasksStatus(
  tasks: Task[],
  isChallengeCompleted: boolean,
  dayOfChallenge?: number
): Map<string, Status> {
  const tasksStatus = new Map<string, Status>();
  const activatedTasksCount = isChallengeCompleted
    ? tasks.length
    : dayOfChallenge;

  for (let i = 0; i < activatedTasksCount; i++) {
    const task = tasks[i];

    tasksStatus.set(task.id, {
      state: StatusState.Success,
      updated: addDaysToDate(date, i + 1),
    });
  }

  if (!isChallengeCompleted) {
    tasksStatus.set(tasks[activatedTasksCount].id, {
      state: StatusState.Pending,
      updated: addDaysToDate(date, activatedTasksCount + 1),
    });
  }

  return tasksStatus;
}

function createAchievementsStatus(achievements: Achievement[]) {
  const date = new Date('September 1, 2020 00:00:00');
  const achievementsStatus = new Map<string, Status>();

  achievements.forEach((achievement) =>
    achievementsStatus.set(achievement.id, {
      state: StatusState.Pending,
      updated: date,
    })
  );

  return achievementsStatus;
}

export default challenges;

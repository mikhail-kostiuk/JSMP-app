import StatusState from '../constants/statusState';
import achievements from '../achievements.json';
import ActualAchievement from '../interfaces/actualAchievement';

const date = new Date('November 1, 2020 00:00:00');
const actualAchievements: ActualAchievement[] = [...achievements].map(
  (achievement: ActualAchievement) => {
    delete achievement.checkComplete;
    achievement.status = { state: StatusState.Pending, updated: date };

    return achievement;
  }
);

export default actualAchievements;

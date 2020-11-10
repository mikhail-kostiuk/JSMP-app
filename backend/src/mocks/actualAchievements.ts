import StatusState from '../constants/statusState';
import achievements from '../achievements.json';
import ActualAchievement from '../interfaces/actualAchievement';
import Achievement from '../interfaces/achievement';

const date = new Date('September 1, 2020 00:00:00');
const actualAchievements: ActualAchievement[] = [...achievements].map(
  (achievement: Achievement): ActualAchievement => {
    const actualAchievement: ActualAchievement = {
      id: achievement.id,
      description: achievement.description,
      image: achievement.image,
      status: { state: StatusState.Pending, updated: date },
    };

    return actualAchievement;
  }
);

export default actualAchievements;

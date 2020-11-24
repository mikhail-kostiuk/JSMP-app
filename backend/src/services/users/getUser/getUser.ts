import { User } from '../../../interfaces/user';

export function getUser(): User {
  // TODO: Actually query db
  return {
    name: 'React Angularov',
    email: 'react.angularov@gmail.com',
    activeChallengeId: '8bd10917-47e3-429a-a925-9b77f2a498c9',
  };
}

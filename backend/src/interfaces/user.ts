export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  activeChallengeId?: string;
}

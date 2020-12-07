import { User } from '../../../interfaces/user';
import { UserDocument } from '../../../interfaces/userDocument';
import { UserModel } from '../../../models/User';

export async function getUser(email: string): Promise<User> {
  const userDocument: UserDocument = await UserModel.findOne({ email });

  return {
    _id: userDocument._id,
    name: userDocument.name,
    email: userDocument.email,
    password: userDocument.password,
    activeChallengeId: userDocument.activeChallengeId,
  };
}

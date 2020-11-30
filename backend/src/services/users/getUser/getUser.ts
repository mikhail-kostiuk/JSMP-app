import { User } from '../../../interfaces/user';
import { UserDocument } from '../../../interfaces/userDocument';
import { UserModel } from '../../../models/User';

export async function getUser(email: string): Promise<User> {
  // TODO: Actually query db
  const userDocument: UserDocument = await UserModel.findOne({ email });

  return {
    name: userDocument.name,
    email: userDocument.email,
    password: userDocument.password,
  };
}

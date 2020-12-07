import passport from 'passport';

import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt';
import { UserDocument } from '../interfaces/userDocument';
import { UserModel } from '../models/User';
import config from '../config.json';

export function setupPassport(): void {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done): Promise<void> => {
        try {
          const userDocument: UserDocument = await UserModel.findOne({ email });

          if (!userDocument) {
            return done(null, false, { message: 'User not found' });
          }

          const validate: boolean = await userDocument.isValidPassword(
            password
          );

          if (!validate) {
            return done(null, false, { message: 'Wrong Password' });
          }

          const user = {
            _id: userDocument._id,
            email: userDocument.email,
            name: userDocument.name,
          };

          return done(null, user, { message: 'Logged in Successfully' });
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.use(
    new JWTstrategy(
      {
        secretOrKey: config.JWT.SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      },
      async (token, done): Promise<void> => {
        try {
          return done(null, token.user);
        } catch (error) {
          done(error);
        }
      }
    )
  );
}

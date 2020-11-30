import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt';
import { UserDocument } from '../interfaces/userDocument';
import { UserModel } from '../models/User';

export function setupPassport(): void {
  passport.use(
    'login',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done): Promise<void> => {
        try {
          const user: UserDocument = await UserModel.findOne({ email });

          if (!user) {
            return done(null, false, { message: 'User not found' });
          }

          const validate: boolean = await user.isValidPassword(password);

          if (!validate) {
            return done(null, false, { message: 'Wrong Password' });
          }

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
        secretOrKey: 'TOP_SECRET',
        jwtFromRequest: ExtractJwt.fromUrlQueryParameter('secret_token'),
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

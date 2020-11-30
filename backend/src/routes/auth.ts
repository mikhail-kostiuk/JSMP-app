import express, {
  Request,
  Response,
  Router,
  NextFunction,
} from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const router: Router = express.Router();

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate(
    'login',
    async (err, user): Promise<void> => {
      try {
        if (err || !user) {
          const error: Error = new Error('An error occurred.');

          return next(error);
        }

        req.login(
          user,
          { session: false },
          async (error): Promise<void | Response> => {
            if (error) {
              return next(error);
            }

            const body = { email: user.email };
            const token = jwt.sign({ user: body }, 'TOP_SECRET');

            return res.json({ token });
          }
        );
      } catch (error) {
        return next(error);
      }
    }
  )(req, res, next);
});

export default router;

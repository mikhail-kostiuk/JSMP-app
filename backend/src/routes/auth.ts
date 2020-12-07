import express, { Request, Response, Router, NextFunction } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import config from '../config.json';

const router: Router = express.Router();

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('local', (err, user, message): Response | void => {
    try {
      if (err || !user) {
        return res.send(message.message);
      }

      req.login(user, { session: false }, (error): Response | void => {
        if (error) {
          return next(error);
        }

        const token: string = jwt.sign(
          {
            user: { _id: user._id, email: user.email, name: user.name },
          },
          config.JWT.SECRET
        );

        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

export default router;

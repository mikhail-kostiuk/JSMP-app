import { createServer, Server as HTTPServer } from 'http';
import express, { Application } from 'express';
import cors from 'cors';
import passport from 'passport';
import bodyParser from 'body-parser';

import authRouter from './routes/auth';
import tasksRouter from './routes/tasks';
import challengesRouter from './routes/challenges';
import achievementsRouter from './routes/achievements';
import { scheduleCurrentChallengeComplition } from './jobs/scheduleCurrentChallengeComplition';
import { scheduleCurrentTaskComplition } from './jobs/scheduleCurrentTaskComplition';
import { connect } from './utils/db';
import config from './config.json';
import { setupPassport } from './auth/auth';
import { setupWebSockets } from './websocket/setupWebSockets';

connect();
setupPassport();

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', authRouter);
app.use(
  '/api/tasks',
  passport.authenticate('jwt', { session: false }),
  tasksRouter
);
app.use(
  '/api/challenges',
  passport.authenticate('jwt', { session: false }),
  challengesRouter
);
app.use(
  '/api/achievements',
  passport.authenticate('jwt', { session: false }),
  achievementsRouter
);

const server: HTTPServer = createServer(app);

setupWebSockets(server);

scheduleCurrentTaskComplition(config.USER.EMAIL);
scheduleCurrentChallengeComplition(config.USER.EMAIL);

server.listen(config.SERVER.PORT, () => {
  console.log(
    `Example app listening at http://localhost:${config.SERVER.PORT}`
  );
});

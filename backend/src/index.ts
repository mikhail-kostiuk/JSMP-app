import { createServer } from 'http';
import express, { Application } from 'express';
import cors from 'cors';
import { Server, Socket } from 'socket.io';
import passport from 'passport';

import authRouter from './routes/auth';
import tasksRouter from './routes/tasks';
import challengesRouter from './routes/challenges';
import achievementsRouter from './routes/achievements';
import { StatusState } from './constants/statusState';
import { scheduleCurrentChallengeComplition } from './jobs/scheduleCurrentChallengeComplition';
import { scheduleCurrentTaskComplition } from './jobs/scheduleCurrentTaskComplition';
import { completeCurrentTask } from './services/tasks/completeCurrentTask/completeCurrentTask';
import { getAchievements } from './services/achievements/getAchievements/getAchievements';
import { ActualAchievement } from './interfaces/actualAchievement';
import { connect } from './utils/db';
import config from './config.json';
import { setupPassport } from './auth/auth';

connect();

const app: Application = express();

setupPassport();

app.use(cors());
app.use('/api/auth', authRouter);
app.use(
  '/api/tasks',
  passport.authenticate('jwt', { session: false }),
  tasksRouter
);
app.use('/api/challenges', challengesRouter);
app.use('/api/achievements', achievementsRouter);

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:9000',
  },
});

io.on('connect', (socket: Socket): void => {
  console.log('Client connected');

  socket.on(
    'task_completed',
    async (challengeId: string): Promise<void> => {
      await completeCurrentTask(config.USER.EMAIL, StatusState.Success);

      const achievements: ActualAchievement[] = await getAchievements(
        challengeId
      );

      socket.emit('update_achievements', achievements);
    }
  );
});

scheduleCurrentTaskComplition(config.USER.EMAIL);
scheduleCurrentChallengeComplition(config.USER.EMAIL);

server.listen(config.SERVER.PORT, () => {
  console.log(
    `Example app listening at http://localhost:${config.SERVER.PORT}`
  );
});

import { createServer } from 'http';
import express, { Application } from 'express';
import cors from 'cors';
import { Server } from 'socket.io';

import tasksRouter from './routes/tasks';
import challengesRouter from './routes/challenges';
import achievementsRouter from './routes/achievements';
import { StatusState } from './constants/statusState';
import { scheduleCurrentChallengeComplition } from './jobs/scheduleCurrentChallengeComplition';
import { scheduleCurrentTaskComplition } from './jobs/scheduleCurrentTaskComplition';
import { completeCurrentTask } from './services/tasks/completeCurrentTask/completeCurrentTask';
import { getAchievements } from './services/achievements/getAchievements/getAchievements';
import { ActualAchievement } from './interfaces/actualAchievement';

const PORT = 3000;
const app: Application = express();

app.use(cors());
app.use('/api/tasks', tasksRouter);
app.use('/api/challenges', challengesRouter);
app.use('/api/achievements', achievementsRouter);

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:9000',
  },
});

io.on('connect', (socket) => {
  console.log('Client connected');

  socket.on('task_completed', (challengeId) => {
    completeCurrentTask(StatusState.Success);

    const achievements: ActualAchievement[] = getAchievements(challengeId);

    socket.emit('update_achievements', achievements);
  });
});

scheduleCurrentTaskComplition();
scheduleCurrentChallengeComplition();

server.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

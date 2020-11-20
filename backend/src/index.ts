import express, { Application } from 'express';

import tasksRouter from './routes/tasks';
import challengesRouter from './routes/challenges';
import achievementsRouter from './routes/achievements';

const app: Application = express();
const PORT = 3000;

app.use('/api/tasks', tasksRouter);
app.use('/api/challenges', challengesRouter);
app.use('/api/achievements', achievementsRouter);

console.log('Hello, World!');

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

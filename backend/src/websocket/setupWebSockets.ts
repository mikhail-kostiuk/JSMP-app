import { Server as HTTPServer } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';

import { ActualAchievement } from '../interfaces/actualAchievement';
import { getActualAchievements } from '../services/achievements/getActualAchievements/getActualAchievements';
import config from '../config.json';
import { completeCurrentTask } from '../services/tasks/completeCurrentTask/completeCurrentTask';
import { StatusState } from '../constants/statusState';
import { getUser } from '../services/users/getUser/getUser';
import { User } from '../interfaces/user';
import { NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export function setupWebSockets(server: HTTPServer): void {
  const io: SocketIOServer = new SocketIOServer(server, {
    cors: {
      origin: `http://localhost:${config.CLIENT.PORT}`,
    },
  });

  io.use((socket: Socket, next: NextFunction) => {
    const token: string = socket.handshake.headers['authorization'].split(
      ' '
    )[1];

    if (!token) {
      return next(new Error('Authentication error'));
    } else {
      verify(token, config.JWT.SECRET, function (err) {
        if (err) {
          return next(new Error('Authentication error'));
        } else {
          return next();
        }
      });
    }
  });

  io.on('connect', (socket: Socket): void => {
    console.log('Client connected');

    socket.on(
      'task_completed',
      async (): Promise<void> => {
        await completeCurrentTask(config.USER.EMAIL, StatusState.Success);
        const user: User = await getUser(config.USER.EMAIL);

        const achievements: ActualAchievement[] = await getActualAchievements(
          user.activeChallengeId
        );

        socket.emit('update_achievements', achievements);
      }
    );
  });
}

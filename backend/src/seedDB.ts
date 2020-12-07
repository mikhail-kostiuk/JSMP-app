import { Mongoose } from 'mongoose';

import { connect } from './utils/db';
import { TaskModel } from './models/Task';
import { UserModel } from './models/User';
import tasks from './tasks.json';
import achievements from './achievements.json';
import { AchievementModel } from './models/Achievement';

connect()
  .then(async (mongoose: Mongoose) => {
    await mongoose.connection.dropCollection('tasks');
    await mongoose.connection.dropCollection('achievements');
    await mongoose.connection.dropCollection('users');

    await TaskModel.create(...tasks);
    await AchievementModel.create(...achievements);
    await UserModel.create({
      name: 'React Angularov',
      email: 'react.angularov@gmail.com',
      password: '123456',
    });

    await mongoose.disconnect();

    console.log('Database has been successfully seeded');
  })
  .catch((err) => console.log(err));

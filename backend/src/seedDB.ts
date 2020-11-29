import { Mongoose } from 'mongoose';

import { TaskModel } from './models/Task';
import tasks from './tasks.json';
import { connect } from './utils/db';

connect()
  .then(async (mongoose: Mongoose) => {
    await mongoose.connection.dropCollection('tasks');

    await TaskModel.create(...tasks);

    await mongoose.disconnect();

    console.log('Database has been successfully seeded');
  })
  .catch((err) => console.log(err));

import mongoose, { Mongoose } from 'mongoose';

import config from '../config.json';

export async function connect(): Promise<Mongoose> {
  return await mongoose.connect(config.DB.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
}

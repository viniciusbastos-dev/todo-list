import Elysia from 'elysia';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI as string);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

export const mongo = new Elysia().decorate('db', db);

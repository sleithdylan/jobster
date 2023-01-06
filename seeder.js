import dotenv from 'dotenv';

import jobs from './data/jobs.js';
// DB and authenticateUser
import connectDB from './db/connect.js';
import Job from './models/Job.js';

dotenv.config();

const importData = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    // Delete existing data
    await Job.deleteMany();

    // Insert sample data
    await Job.insertMany(jobs);

    console.log('Data Imported!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    // Delete existing data
    await Job.deleteMany();

    console.log('Data Destroyed!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

import express from 'express';

import {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
  showStats,
} from '../controllers/jobsController.js';
import demoUser from '../middleware/demoUser.js';

const router = express.Router();

router.route('/').post(demoUser, createJob).get(getAllJobs);
router.route('/stats').get(showStats);
router.route('/:id').delete(demoUser, deleteJob).patch(demoUser, updateJob);

export default router;

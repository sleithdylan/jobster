import express from 'express';
import rateLimiter from 'express-rate-limit';

import { register, login, updateUser } from '../controllers/authController.js';
import authenticateUser from '../middleware/auth.js';
import demoUser from '../middleware/demoUser.js';

const router = express.Router();

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: 'Too many requests from this IP, please try again in 15 minutes',
});

router.route('/register').post(apiLimiter, register);
router.route('/login').post(apiLimiter, login);
router.route('/updateUser').patch(authenticateUser, demoUser, updateUser);

export default router;

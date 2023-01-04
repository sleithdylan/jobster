import { BadRequestError } from '../errors/index.js';

const demoUser = (req, res, next) => {
  if (req.user.demoUser) {
    throw new BadRequestError('Sorry, you cannot edit this as Demo User.');
  }
  next();
};

export default demoUser;

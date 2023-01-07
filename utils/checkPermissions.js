import { UnAuthenticatedError } from '../errors/index.js';

export const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) return;

  throw new UnAuthenticatedError('Not authorized to access this route');
};

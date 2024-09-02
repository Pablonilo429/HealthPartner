import { tokenauth } from '../config/index.js';

export const authMiddleware = (req, res, next) => {
    const token = tokenauth;
    if (!token) {
        return next(new Error('Please provide a token to access this resource'));
    }
    req.token = token;
    next();
};

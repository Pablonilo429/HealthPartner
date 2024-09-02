import express from 'express';
import authRoutes from './auth.js';
import fitnessRoutes from './fitness.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/fitness', fitnessRoutes);

export default router;

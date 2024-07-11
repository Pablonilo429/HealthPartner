import express from 'express';
import { fetchFitnessData } from '../services/googleFitness.js';
import { authMiddleware } from '../middlewares/auth.js';
import { tokenauth } from '../config/index.js';

const router = express.Router();

const fetchDataAndRespond = async (req, res, next, dataTypeName, dataSourceId) => {
    try {
        const now = Date.now();
        const startTimeMillis = now - 7 * 24 * 60 * 60 * 1000;
        const endTimeMillis = now;
        const result = await fetchFitnessData(req.token || tokenauth, dataTypeName, dataSourceId, startTimeMillis, endTimeMillis);
        res.json(result.data);
    } catch (error) {
        next(error);
    }
};

router.get('/steps', authMiddleware, (req, res, next) => {
    fetchDataAndRespond(req, res, next, 'com.google.step_count.delta', 'derived:com.google.step_count.delta:com.google.android.gms:estimated_steps');
});

router.get('/calories', authMiddleware, (req, res, next) => {
    fetchDataAndRespond(req, res, next, 'com.google.calories.expended', 'derived:com.google.calories.expended:com.google.android.gms:merge_calories_expended');
});

router.get('/distance', authMiddleware, (req, res, next) => {
    fetchDataAndRespond(req, res, next, 'com.google.distance.delta', 'derived:com.google.distance.delta:com.google.android.gms:merge_distance_delta');
});

router.get('/bpm', authMiddleware, (req, res, next) => {
    fetchDataAndRespond(req, res, next, 'com.google.heart_rate.bpm', 'derived:com.google.heart_rate.bpm:com.google.android.gms:merge_heart_rate_bpm');
});

export default router;

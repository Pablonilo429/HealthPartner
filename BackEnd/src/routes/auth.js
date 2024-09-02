import express from 'express';
import { generateAuthUrl, getToken } from '../services/googleFitness.js';

const router = express.Router();

router.get('/', (req, res) => {
    const url = generateAuthUrl();
    res.json({ url });
});

router.get('/get-token', async (req, res, next) => {
    try {
        const { code } = new URL(req.url, `http://${req.headers.host}`).searchParams;
        const token = await getToken(code);
        res.json({ token });
    } catch (error) {
        next(error);
    }
});

export default router;

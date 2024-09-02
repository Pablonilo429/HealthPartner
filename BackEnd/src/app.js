import express from 'express';
import routes from './routes/index.js';
import { corsMiddleware } from './middlewares/cors.js';

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use('/api', routes);

// error handler middleware
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

export default app;

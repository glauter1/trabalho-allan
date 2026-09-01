
import express from 'express';
import pessoaRoutes from './routes/pessoa.routes.js';
import logMiddleware from './middlewares/log.middleware.js';

const app = express();
app.use(express.json());
app.use(logMiddleware);
app.use('/pessoas', pessoaRoutes);

export default app;

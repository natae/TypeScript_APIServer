import express, { Request, Response } from 'express';
import rootRouter from './router/root';

const app = express();

app.use('/', rootRouter);

app.listen(8080);
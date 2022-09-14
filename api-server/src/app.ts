import express from 'express';
import accountRouter from './router/account';
import config from './config/server';

const app = express();

app.use(express.json());

app.use('/account', accountRouter);

app.listen(config.port);
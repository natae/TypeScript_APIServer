import express, { Request, Response } from 'express';
import accountRouter from './router/account';
import config from './config/server';

const app = express();

app.use(express.json());

app.get('/healthcheck', healthcheck);

app.use('/account', accountRouter);

app.listen(config.port);

function healthcheck(req: Request, res: Response) {
    res.sendStatus(200);
}
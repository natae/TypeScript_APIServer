import express, { Request, Response } from 'express';
import * as accountQuery from '../query/account';


export async function getAccount(req: Request, res: Response) {
    try {
        const account = await accountQuery.select(req.body.nickname)
        if (account == null) {
            res.send(`Not exist account: ${req.body.nickname}`);
            return;
        }

        res.send(account);
    } catch (err) {        
        if (err instanceof Error) {
            res.send(err.message);
        }
    }
}

export async function createAccount(req: Request, res: Response){
    try {
        const lastInsertId = await accountQuery.insert(req.body.nickname)

        if (lastInsertId > 0) {
            res.send(`Success: ${lastInsertId}`);
        } else {
            res.send('Fail');
        }
    } catch (err) {
        if (err instanceof Error) {
            res.send(err.message);
        }
    }
}

export async function deleteAccount(req: Request, res: Response){
    try {
        const affectedRows = await accountQuery.remove(req.body.nickname)

        if (affectedRows > 0) {
            res.send(`Success: ${affectedRows}`);
        } else {
            res.send('Fail');
        }
    } catch (err) {
        if (err instanceof Error) {
            res.send(err.message);
        }
    }
}
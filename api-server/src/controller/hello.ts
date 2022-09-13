import express, { Request, Response } from 'express';

function hello(req:Request, res:Response){
    res.send("Hello World");
}

export {hello};
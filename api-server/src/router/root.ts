import express from 'express';
import * as helloController from '../controller/hello';

var router = express.Router();

router.get('/hello', helloController.hello);

export default router;
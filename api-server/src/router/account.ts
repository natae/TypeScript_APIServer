import express from 'express';
import * as accountController from '../controller/account';

var router = express.Router();

router.post('/get', accountController.getAccount);
router.post('/create', accountController.createAccount);
router.post('/delete', accountController.deleteAccount);

export default router;
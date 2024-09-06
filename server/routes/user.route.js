import express from 'express';

import {
    deletUser,
    updateUser,
} from '../controllers/user.controller.js';

import { verifyToken } from '../utils/verify.token.js';

const router = express.Router();

router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deletUser);   

export default router;
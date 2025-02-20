import express from 'express';
import { getProfile, Login, Logout, Register } from '../controllers/authController.js';
import authCheck from '../middlewares/protectedRoute.js';

const router = express.Router();

router.post('/register', Register)
router.post('/login', Login)
router.post('/logout', Logout)
router.get('/profile', authCheck, getProfile)

export default router;
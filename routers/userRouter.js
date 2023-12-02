import Router from 'express';
import userController from '../controllers/userController.js';
import User from "../models/userModel.js";

const router = new Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/all', userController.getAllUsers);

// router.post('/registration', userController.registration);
// router.get('/check', authMiddleware, userController.checkAuth);
// router.put('/user/:id', userController.updateUser);
// router.delete('/user/:id', userController.deleteUser);

export default router;
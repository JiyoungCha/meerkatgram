/**
 * @file routes/auth.router.js
 * @description 인증 관련 라우터
 * 251119 v1.0.0 CK init
 */

import express from 'express';
import authController from '../app/controllers/auth.controller.js';
import validationHandler from '../app/middlewares/validations/validationHandler.js';
import loginValidators from '../app/middlewares/validations/validators/auth/login.validators.js';
import authMiddleware from '../app/middlewares/auth/auth.middleware.js';

const authRouter = express.Router();

authRouter.post('/login', loginValidators, validationHandler, authController.login);
authRouter.post('/reissue', authController.reissue);

export default authRouter;
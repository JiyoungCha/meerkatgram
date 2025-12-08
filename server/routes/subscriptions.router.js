/**
 * @file routes/subscriptions.router.js
 * @description subscriptions 관련 라우터
 * 251208 v1.0.0 CK init
 */

import express from 'express';
import authMiddleware from '../app/middlewares/auth/auth.middleware.js';
import subscriotionsController from '../app/controllers/subscriotions.controller.js';

const subscriptionsRouter = express.Router();

subscriptionsRouter.post('/', authMiddleware, subscriotionsController.subscribe)

export default subscriptionsRouter;
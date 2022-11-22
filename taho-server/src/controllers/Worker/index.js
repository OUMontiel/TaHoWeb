import express from 'express';
import asyncHandler from 'express-async-handler';
import WorkerController from './WorkerController.js';

const router = express.Router({ mergeParams: true });

router.post('/register', asyncHandler(WorkerController.register()));
router.post('/login', asyncHandler(WorkerController.login()));

export default router;

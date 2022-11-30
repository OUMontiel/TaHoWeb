import express from 'express';
import asyncHandler from 'express-async-handler';
import auth from '../../middleware/auth.js';
import WorkerController from './WorkerController.js';

const router = express.Router({ mergeParams: true });

router.post('/register', asyncHandler(WorkerController.register()));
router.post('/login', asyncHandler(WorkerController.login()));
router.get('/:service', auth, asyncHandler(WorkerController.getWorkers()));

export default router;

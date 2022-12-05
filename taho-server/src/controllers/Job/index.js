import express from 'express';
import asyncHandler from 'express-async-handler';
import auth from '../../middleware/auth.js';
import JobController from './JobController.js';

const router = express.Router({ mergeParams: true });

router.get('/', auth, asyncHandler(JobController.getCalls()));
router.post('/call', auth, asyncHandler(JobController.call()));
router.post('/cancel', auth, asyncHandler(JobController.cancel(false)));
router.post('/end', auth, asyncHandler(JobController.cancel(true)));

export default router;

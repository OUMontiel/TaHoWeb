import { sequelize } from '../../db/index.js';
import { User, Worker, Job } from '../../db/models.js';

class JobController {
    getCalls() {
        return async (req, res) => {
            const workerId = req.userId.slice(1);
            const jobs = await Job.findAll({ where: { workerId } });

            const users = await Promise.all(
                jobs.map(async (job) => await User.findByPk(job.userId)),
            );

            res.json({ jobs, users });
        };
    }

    call() {
        return async (req, res) => {
            const userId = req.userId.slice(1);
            let { workerId } = req.body;
            if (!userId || !workerId) {
                return res.status(400).json({
                    error: 'User and worker are required to create a job!',
                });
            }

            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(400).json({
                    error: 'User not found!',
                });
            }

            const worker = await Worker.findByPk(workerId);
            if (!worker) {
                return res.status(400).json({
                    error: 'Worker not found!',
                });
            }

            let job;
            try {
                job = await sequelize.transaction(async (t) => {
                    const job = await Job.create(
                        {
                            userId,
                            workerId,
                        },
                        { transaction: t },
                    );
                    return job;
                });
            } catch (error) {
                console.log(error);
                return res.status(400).json({
                    error: 'Could not call worker.',
                });
            }
            const jobs = await Job.findAll();
            res.status(201).json({
                success: true,
                message: 'Worker called successfully!',
                jobs,
            });
        };
    }

    cancel(isWorker) {
        return async (req, res) => {
            let userId;
            let workerId;
            if (!isWorker) {
                userId = req.userId.slice(1);
                workerId = req.body.workerId;
            } else {
                userId = req.body.userId;
                workerId = req.userId.slice(1);
            }
            if (!userId || !workerId) {
                return res.status(400).json({
                    error: 'User and worker are required to find job!',
                });
            }

            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(400).json({
                    error: 'User not found!',
                });
            }

            const worker = await Worker.findByPk(workerId);
            if (!worker) {
                return res.status(400).json({
                    error: 'Worker not found!',
                });
            }

            const job = await Job.findOne({ where: { userId, workerId } });
            try {
                await job.destroy();
                const jobs = await Job.findAll();
                res.status(200).send({
                    message: 'Call cancelled.',
                    jobs,
                });
            } catch (err) {
                res.status(500).send({
                    message: 'Could not cancel the call.\n' + err,
                });
            }
        };
    }
}

export default new JobController();

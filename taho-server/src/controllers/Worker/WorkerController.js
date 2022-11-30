import { sequelize } from '../../db/index.js';
import { Worker } from '../../db/models.js';

class WorkerController {
    register() {
        return async (req, res) => {
            const {
                firstName,
                lastName,
                phone,
                rfc,
                certificates,
                services,
                description,
                username,
                password,
            } = req.body;
            if (
                !firstName ||
                !lastName ||
                !phone ||
                !rfc ||
                !services ||
                !description ||
                !username ||
                !password
            ) {
                return res
                    .status(400)
                    .json({ error: 'All fields are required!' });
            }
            const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (!passwordPattern.test(password)) {
                return res.status(400).json({
                    error: 'Password does not follow the requirements!',
                });
            }
            const phonePattern =
                /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
            if (!phonePattern.test(phone)) {
                return res.status(400).json({
                    error: 'Phone number is not entered correctly',
                });
            }
            const hashedPassword = await Worker.hashPassword(password);
            let worker;
            try {
                worker = await sequelize.transaction(async (t) => {
                    const worker = await Worker.create(
                        {
                            username,
                            password: hashedPassword,
                            firstName,
                            lastName,
                            phone,
                            rfc,
                            certificates,
                            services,
                            description,
                        },
                        { transaction: t },
                    );
                    return worker;
                });
            } catch (error) {
                console.log(error);
                return res.status(400).json({
                    error: 'Username unavailable. Try a different one.',
                });
            }
            const token = await worker.generateToken(true);
            res.cookie('authcookie', token);
            res.status(201).json({
                success: true,
                message: 'Worker created successfully',
                worker,
            });
        };
    }

    login() {
        return async (req, res) => {
            const { username, password } = req.body;
            const worker = await Worker.findOne({ where: { username } });
            if (!worker) {
                return res.status(401).json({
                    error: 'Try again. Username for worker has not been found.',
                });
            }
            const matches = await worker.comparePassword(password);
            if (!matches) {
                return res.status(401).json({
                    error: 'Try again. Username and password do not match.',
                });
            }
            const token = await worker.generateToken(true);
            res.cookie('authcookie', token);
            res.status(201).json({
                success: true,
                message: 'Login successful',
                worker,
            });
        };
    }
}

export default new WorkerController();

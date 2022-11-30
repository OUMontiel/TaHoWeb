import { sequelize } from '../../db/index.js';
import { User, Worker } from '../../db/models.js';

class UserController {
    register() {
        return async (req, res) => {
            const { firstName, lastName, phone, username, password } = req.body;
            if (!firstName || !lastName || !phone || !username || !password) {
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
            const hashedPassword = await User.hashPassword(password);
            let user;
            try {
                user = await sequelize.transaction(async (t) => {
                    const user = await User.create(
                        {
                            username,
                            password: hashedPassword,
                            firstName,
                            lastName,
                            phone,
                        },
                        { transaction: t },
                    );
                    return user;
                });
            } catch (error) {
                console.log(error);
                return res.status(400).json({
                    error: 'Username unavailable. Try a different one.',
                });
            }
            const token = await user.generateToken(false);
            res.cookie('authcookie', token);
            res.status(201).json({
                success: true,
                message: 'User created successfully',
                user,
            });
        };
    }

    login() {
        return async (req, res) => {
            const { username, password } = req.body;
            const user = await User.findOne({ where: { username } });
            if (!user) {
                return res.status(401).json({
                    error: 'Try again. Username has not been found.',
                });
            }
            const matches = await user.comparePassword(password);
            if (!matches) {
                return res.status(401).json({
                    error: 'Try again. Username and password do not match.',
                });
            }
            const token = await user.generateToken(false);
            res.cookie('authcookie', token);
            res.status(201).json({
                success: true,
                message: 'Login successful',
                user,
            });
        };
    }

    logout() {
        return async (req, res) => {
            const user = await User.findByPk(req.userId.slice(1));
            user?.update({ token: '' });
            const worker = await Worker.findByPk(req.userId.slice(1));
            worker?.update({ token: '' });
            res.clearCookie('authcookie');
            res.status(200).json({
                success: true,
                message: 'Logout successful',
            });
        };
    }

    isLoggedIn() {
        return async (req, res) => {
            const isWorker = req.userId[0] == 'w' ? true : false;
            let user;
            if (!isWorker) {
                user = await User.findByPk(req.userId.slice(1));
            } else {
                user = await Worker.findByPk(req.userId.slice(1));
            }
            if (user !== null) {
                return res.status(201).json({
                    success: true,
                    message: 'Active session',
                    isWorker,
                    user,
                });
            } else {
                res.sendStatus(401);
            }
        };
    }
}

export default new UserController();

import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { sequelize } from './db/index.js';
import UserRoutes from './controllers/User/index.js';

dotenv.config({ path: `.env` });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());

// User routes
app.use('/user', UserRoutes);

sequelize.sync({ force: true }).then(() => console.log('Database is ready'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});

import bodyParser from 'body-parser';
import express from 'express';
import { sequelize } from './db/index.js';
import { User } from './db/models.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

sequelize.sync({ force: true }).then(() => console.log('Database is ready'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});

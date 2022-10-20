import bodyParser from 'body-parser';
import express from 'express';
import { sequelize } from './db';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

(async () => {
    await sequelize.sync({ force: true});

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
    });
})


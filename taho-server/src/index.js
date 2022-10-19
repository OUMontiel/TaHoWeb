import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});

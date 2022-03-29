import express from 'express';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config();

const app = express();

app.set('port', process.env.PORT || 8000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/data/rec1.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'data/records.json'));
});

app.get('/data/rec2.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'data/small-record.json'));
});

export default app;

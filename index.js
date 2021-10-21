import express from 'express';
import { exportJson } from './api/parsing.js';

const app = express();

app.use(express.static('public'));
exportJson();

app.listen(3000, () => console.log('porting on 3000'));
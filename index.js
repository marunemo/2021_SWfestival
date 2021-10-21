import express from 'express';
import { getApiJson } from './api/parsing.js';

const app = express();

app.use(express.static('public'));
getApiJson();

app.listen(3000, () => console.log('porting on 3000'));
import express from 'express';
import { getApiJson } from './api/parsing.js';

const app = express();

app.use(express.static('public'));
getApiJson();
setInterval(getApiJson, 10 * 60 * 1000);

app.listen(8080, () => console.log('porting on 8080'));
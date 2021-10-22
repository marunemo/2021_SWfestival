import express from 'express';
import { getApiJson } from './api/parsing.js';

const app = express();

app.use(express.static('public'));
getApiJson();

app.listen(8080, () => console.log('porting on 8080'));
const express = require('express');
const app = express();

app.use(express.static('front'));

app.listen(3000, () => console.log('porting on 3000'));
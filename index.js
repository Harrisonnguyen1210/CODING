'use strict';
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './Task2/views');
app.use(express.static('Task2/public'));

app.get('/', (req, res) => {
    res.render('task2');
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});
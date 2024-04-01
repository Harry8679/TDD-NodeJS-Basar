const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World !');
});

app.post('/api/1.0/users', (req, res) => {
    return res.send('User created');
});



module.exports = app;
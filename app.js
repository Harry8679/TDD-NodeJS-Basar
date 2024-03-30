const express = require('express');

const app = express();

const port = 6000;

app.get('/', (req, res) => {
    res.send('Hello World !');
});

app.listen(port, () => {
    console.log(`Emarh TDD NodeJS App is ruuning on the port ${port}`);
});

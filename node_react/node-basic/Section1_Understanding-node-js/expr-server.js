const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hey what's up from Express?");
});

app.get('/sub-dir', (req, res) => {
    res.send("Hey what's up from A sub-dir? Does this actually work?");
});

app.listen(3000);

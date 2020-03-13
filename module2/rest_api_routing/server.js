const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var profile = {
    username : 'Madhura Bhujbal',
    email : '[reducted]',
    url : 'http//madhura.co'
}
app.use(bodyParser.json());

app.get('/profile', (req, res) => {
    res.send(profile);
});

app.post('/profile', (req, res) => {
    profile = req.body;
    console.log(req.body);
    res.sendStatus(201);
});

app.put('/profile', (req, res) => {
    Object.assign(profile, req.body)
    res.sendStatus(204);
});

app.delete('/profile', (req, res) => {
    profile = {}
    res.sendStatus(204);
});

app.listen(3000);
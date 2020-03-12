const express = require('express');
const app = express();

//middleware function: it is function with 3 arguments: (req, res, next)
app.use((req, res, next) =>{
    console.log(`${req.method} : ${req.url}`);
    next();
});

app.get('/', (req, res) =>{
    res.send({msg : 'hello world!!'});
});

app.get('/accounts', (req, res) =>{
    res.send({msg : 'accounts'});
});

app.get('/transactions', (req, res) =>{
    res.send({msg : 'transactions'});
});

app.listen(3000);
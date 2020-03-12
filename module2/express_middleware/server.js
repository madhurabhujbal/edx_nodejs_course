const express = require('express');
const app = express();

//middleware function: it is function with 3 arguments: (req, res, next)
app.use((req, res, next) =>{
    console.log(`${req.method} : ${req.url}`);
    next();
});

app.use((req, res, next) =>{
    if (req.query.api_key){
        next();
    }else{
        res.status(401).send({msg : 'Not Authorized'});
    }
});

app.get('/', (req, res) =>{
    res.send({msg : 'hello world!!'});
});

app.get('/accounts', (req, res, next) => { //this is called inline middleware
    console.log('accounts inline middleware');
    next();
},

(req, res) =>{
    res.send({msg : 'accounts'});
});

app.get('/transactions', (req, res) =>{
    res.send({msg : 'transactions'});
});

app.listen(3000);
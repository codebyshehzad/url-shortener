const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const staticRouter = require('./routes/staticRouter');
const urlRoute = require('./routes/url');
const {connectToMongoDB} = require('./connection');
const PORT = 8000;



connectToMongoDB('mongodb://localhost:27017/short-url')
.then(()=>{console.log("MongoDB Connected!")});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs');

app.set('views', path.resolve('./views'));




app.use('/url',urlRoute);
app.get('/',staticRouter);



app.listen(PORT,()=>{console.log("Server started!")});


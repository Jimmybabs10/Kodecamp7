const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const indexRouter = require('./routes/indexRoute');
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/Kodecamptest', function(error){
    if(error){console.log(error)}
    console.log('connected to database successfully');
})

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', indexRouter);

const port = 3000;
app.listen(port, () =>{
    console.log(`server running on ${port}`);
})
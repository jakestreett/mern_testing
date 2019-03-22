const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const items = require('./routes/api/items');


const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

//MongoDB URI
    //xx mLab.com Free 
    //Use Atlas Account 

// DB Config
const db = require('./config/keys').mongoURI;


mongoose
    .connect(db)
    .then(()=> console.log('MognoDB Conected...'))
    .catch(err => console.log(err));
// all routes needing to go to config/api/items to go there
//Use Routes
app.use('/api/items', items)

const port = process.env.PORT || 5000

app.listen(port,() => console.log(`Server started on port ${port}`));
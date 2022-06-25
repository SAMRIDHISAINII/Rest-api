const mongoose= require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors= require('cors');
require('dotenv/config');

// middlewares
app.use(cors());

app.use(bodyParser.json());
// const DB = 'mongodb+srv://samridhi:jpw86u#MGZxS*32@cluster0.odfmr.mongodb.net/restapi?retryWrites=true&w=majority'

// mongoose.connect(DB).then(() => {
//     console.log('connection succesful');
// }).catch((err) => console.log('no connection'));

// import routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);
// app.use('/user',userRoute);

// routes
a
app.get('/', (req,res) => {
    res.send('we are on home');
});

app.get('/posts', (req,res) => {
    res.send('we are not at home');
});


// const DB = 'mongodb+srv://samridhi:jpw86u#MGZxS*32@cluster0.odfmr.mongodb.net/restapi?retryWrites=true&w=majority'
// lsof -i tcp:3000
// sudo kill -9 the number
// nodemon app.js

mongoose.connect(process.env.DB_CONNECTION,
{userNewUrlParser: true} ,
() => console.log('connectedto db!')
);

app.listen(3000);

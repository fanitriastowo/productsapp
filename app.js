const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// import routes
const productRouter = require('./routes/product.route');

const app = express();

// db configuration
let port = 3000;
let dev_db_url = "mongodb://localhost:27017/nodemongotutorial";
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, "mongoDB connection is error"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/product', productRouter);

app.listen(port, () => {
    console.log('listening on port ' + port);
});


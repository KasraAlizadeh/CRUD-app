const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('../root/config/database_config');
const mongoose = require('mongoose');
const UserRoute = require('../routes/User.js');

const app = express();


app.use('/user',UserRoute);
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// configuration of database
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});



app.get('/', (req, res) => {
    res.json({"message": "Hello to test CRUD app"});
});

app.listen(1010, () => {
    console.log("Server is listening on port 1010");
});    



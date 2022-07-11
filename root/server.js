const express = require('express');
const bodyParser = require('body-parser');


const app = express();


app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Hello to test CRUD app"});
});

app.listen(1010, () => {
    console.log("Server is listening on port 1010");
});
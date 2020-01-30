const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();
const fileName = __dirname + '/model/staff.json'
let staff = require(fileName);
const helper = require("./helper/helper");


app.use(cors())
app.use(express.json())


app.use('/staff', require('./routes/api/staff'));





app.listen(5000, function () {
    console.log('Server is running on port 5000');
});
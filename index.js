const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT || 3000;

// create express app
const app = express();

// Require employee routes
const routes = require('./routes/');

const corsOptions = {
  origin: "http://localhost:3000"
};

// using as middleware
app.use('/', routes);

// connecting frontend to backend
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

const transactions1File = fs.readFileSync('./transactions-1.json');
let jsonData = JSON.parse(transactions1File);
console.log("start------------------");

for (let i = 0; i < jsonData.transactions.length; i++) {
  let app = jsonData.transactions[i];
  let address = app.address;
  let confirmations = app.confirmations;
  console.log("address: "+ address + ", confirmations: "+confirmations);
}
console.log("done------------------");

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

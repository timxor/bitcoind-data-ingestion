const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();

// read files
const tx1 = require( './transactions-1.json' );
const tx2 = require( './transactions-2.json' );
const knownCustomers = require( './known-addresses.json' );

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










let postgres = {};
for (const tx in tx1.transactions) {
    const customer = knownCustomers[ tx.address ];
    if (customer !== undefined && 6 <= tx.confirmations ) {
        if (postgres[customer] === undefined ) {
            postgres[customer].count = postgres[customer].count + 1;
            postgres[customer].sum = postgres[customer].sum + tx.amount;
        } else {
            postgres[customer] = {count: 0, sum: tx.amount };
        }
    } else {
        // customer is not known
    }

}











// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

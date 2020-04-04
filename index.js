// var, let , const 

var express = require('express');
var bodyParser = require('body-parser');

const CustomerModule = require('./customers');


var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Listning...');
});

app.get('/customer', function(req, res){
    const name = req.query.name;
    const customerDetails = CustomerModule.getCustomerDetails(name);

    res.json({ status: 200, customerDetails: customerDetails });
});

app.get('/customer/:id', function(req, res){
    const id = req.params.id;
    console.log('ID', id);
    const customerDetails = CustomerModule.getCustomerbyId(id);

    res.json({ status: 200, customerDetails: customerDetails });
});

app.get('/customers', function(req, res){
});

app.listen(3030, () => {
    console.log("Server is listening...");
});
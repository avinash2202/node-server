const CustomerData = require('./data/customers.json');

function getCustomerDetails(customername) {
    console.log(customername);
    const customers = CustomerData.data;

    let customerDetails = {};
    for (var i=0; i < customers.length; i++) {
        if (customers[i].firstName === customername) {
            customerDetails = customers[i];
        }
    }
    return customerDetails;
}

function getCustomerbyId(customerId) {
    console.log(customerId);
    const customers = CustomerData.data;

    let customerDetails = {};
    for (var i=0; i < customers.length; i++) {
        if (customers[i].id === Number(customerId)) {
            customerDetails = customers[i];
        }
    }
    return customerDetails;
}

function getCustomerList() {

}


module.exports = {
    getCustomerDetails,
    getCustomerbyId
}
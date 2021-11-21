const mongoose = require('mongoose')

//Creating a Schema
const customerSchema = new mongoose.Schema({
    fullName: String,
    email:String,
    balance:Number
}); 
const transactionSchema = new mongoose.Schema({
    senderEmail: String,
    receiverEmail:String,
    amount:Number,
    Date:Date
}); 
//Creating a model

//A collection 'customers' will be created
const Customer = mongoose.model('Customer',customerSchema)

// A collection 'transactions' will be created
const Transaction = mongoose.model('Transaction',transactionSchema)

//Exporting the modules
module.exports = {Transaction,Customer}


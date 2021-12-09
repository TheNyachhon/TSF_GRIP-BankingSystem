const express = require('express')
const path = require('path')
const app = express()
const moment = require('moment')

require('dotenv').config()

const mongoose = require('mongoose');
const {Customer} = require('./database')
const {Transaction} = require('./database')

// Database connection
const connectionURL = process.env.url
mongoose.connect(connectionURL)
    .then(() => {
        console.log("Connection open!!");
    })
    .catch(err => {
        console.log("Connection failed!: ");
        console.log(err);
    })

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
//setting up view engine
app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/customers',async(req,res)=>{
    await Customer.find({})
    .then(customers=>{  
        res.render('customers',{customers})
    })
    .catch(e=>{
        console.log("Error fetching data from database")
        console.log(e)
    })
    
})
app.get('/transactions',async(req,res)=>{
    const noOfTransactions = await Transaction.countDocuments()
    await Transaction.find({})
    .then(transactions=>{
        res.render('transactions',{transactions,noOfTransactions})
    })
    .catch(e=>{
        console.log('Error')
        console.log(e)
    })
})
app.get('/transfer/:id',async (req,res)=>{
    const {id} = req.params
    const error = req.query
    const allCustomers = await Customer.find({})
    await Customer.findOne({_id:id})
    .then(sender=>{
        res.render('transfer',{allCustomers,sender,error})
    })
    .catch(e=>{
        console.log("Error")
        console.log(e)
    })
})
app.post('/transfer/:id',async (req,res)=>{
    const {id} = req.params
    const receiverEmail = req.body.receiver
    const amount = parseInt(req.body.amount)
    const sender = await Customer.findOne({_id:id})
    await Customer.findOne({email:receiverEmail})
    .then(async (receiver)=>{
        if(sender.balance >= amount){
            //Balance updated for sender
            await Customer.findOneAndUpdate({ _id: id }, { balance: sender.balance-amount})
            //Balance updated for receiver
            await Customer.findOneAndUpdate({ _id: receiver._id }, { balance: receiver.balance+amount})
            // Transaction history database updated
            const time = moment().format('MMMM Do YYYY, h:mm:ss a');
            console.log(time)
            // const format = {day: 'numeric', month: 'numeric',year: 'numeric',hour:'2-digit',minute:'numeric',second:'numeric'};
            // const now = new Date()
            // const transactionTime = now.toLocaleDateString("en-US",format)
            const newTransaction = new Transaction({
                senderEmail: sender.email,
                receiverEmail: receiver.email,
                amount:amount,
                Date:time
            })
            newTransaction.save();
            res.redirect("?transferfunds=successful")
        }else{
            res.redirect("?transferfunds=unsuccessful")
        }
        
    })
    .catch(e=>{
        console.log("Error")
        console.log(e)
    })
})

app.get('*',(req,res)=>{
    res.send('Incorrect URL.')
})

app.listen(process.env.PORT || 8000, () => {
    console.log("Listening on port 8000");
})

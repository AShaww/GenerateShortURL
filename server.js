const express = require('express')
const config = require('config')
const PORT = config.get('PORT')
const dbConnect = require('./config/db')
const GeneratedURL = require('./models/urlSchema')

const app = express()

dbConnect();


app.set('view engine', 'ejs');


// GET all records from MongoDB
app.get('/', (req, res) => {
    const generatedURL = GeneratedURL.find()
    res.render('index');
})



// POST "A" record to MongoDB


// GET "A" record from MongoDB - relate that to the short url 


app.listen(PORT, () => {
    console.log('Server running on port 1337')
})
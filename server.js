const express = require('express')
const config = require('config')
const PORT = config.get('PORT')
const GeneratedURL = require('./models/urlSchema')
const dbConnect = require('./config/db')
const app = express()
dbConnect();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }))

// GET all records from MongoDB

app.get('/', async(req, res) => {
    const generatedURL = await GeneratedURL.find()
    res.render('index', ({ generatedURL: generatedURL }));
})


// POST "A" record to MongoDB
app.post('/generatedURLs', (req, res) => {
    GeneratedURL.create({
        long: req.body.longUrl
    })
    res.redirect('/')
})

// GET "A" record from MongoDB - relate that to the short url 


app.listen(PORT, () => {
    console.log('Server running on port 1337')
})
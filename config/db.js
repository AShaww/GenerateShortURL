const mongoose = require('mongoose')
const config = require('config');

const db = config.get('mongoURL')


const connectDB = async() => {
    try {
        mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB Connected")
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}
module.exports = connectDB
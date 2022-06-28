const { mongoose, Schema, mongo } = require('mongoose')


const generatedURLSchema = mongoose.Schema({
    long: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: "jli2k213"
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    },
    dateCreated: {
        type: Date,
        required: true,
        default: Date.now
    }
})


module.exports = mongoose.model('shortURL', generatedURLSchema)
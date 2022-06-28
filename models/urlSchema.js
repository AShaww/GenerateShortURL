const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto').webcrypto
let nanoid = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce(((t, e) => t += (e &= 63) < 36 ? e.toString(36) : e < 62 ? (e - 26).toString(36).toUpperCase() : e > 62 ? "-" : "_"), "");

const generatedURLSchema = new Schema({
    long: {
        type: String,
        unique: true,
        required: true
    },
    short: {
        type: String,
        required: true,
        unique: true,
        default: () => nanoid(8),
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
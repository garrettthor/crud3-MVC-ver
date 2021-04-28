const mongoose = require('mongoose')

const CharSchema = new mongoose.Schema({
    char: {
        type: String,
        required: true,
    },
    activeChar: {
        type: Boolean,
        required: true,
    }
})

module.exports = mongoose.model('Char', CharSchema)
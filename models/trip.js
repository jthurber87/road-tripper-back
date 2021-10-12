const mongoose = require('mongoose')

const tripSchema = mongoose.Schema({
    name: {type: String, required: true},
    checklist: [{type: String}],
    destinations: [{
        name: {type: String, required: true},
        todo: [{type: String}],
        images: [{type: String}]
    }]
})

module.exports = mongoose.model('Trip', tripSchema)

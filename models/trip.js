const mongoose = require('mongoose')

const tripSchema = mongoose.Schema({
    destinations: [{
        name: {type: String, required: true},
        checklist: [{type: String}],
        images: [{type: String}]
    }]
})

module.exports = mongoose.model('Trip', tripSchema)

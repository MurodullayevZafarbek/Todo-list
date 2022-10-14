const { model, Schema } = require('mongoose')

module.exports = model('list', new Schema({
    title: {
        type: String
    },
    status: {
        type:Boolean,
        default: false
    }
},{ timetamps: true }))
const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')

const Schema = mongoose.Schema

const TodoSchema = new Schema({
    title: { type: String, required: true, minlength: 4, maxlength: 100 },
    task: { type: String, required: true, minlength: 10, maxlength: 250 },
    hasHighPriority: { type: Boolean, default: false }
},{timestamps: true})

module.exports = mongoose.model('Todo', TodoSchema)
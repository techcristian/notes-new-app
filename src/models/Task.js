const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false }


}, {
    timestamps: true,

});

module.exports = mongoose.model('Task', taskSchema);
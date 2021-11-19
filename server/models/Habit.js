const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const habitSchema = new Schema({

 name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
 },
 tracktionDays: {
    type: [Boolean]
 },
 createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
 }
 
});

habitSchema.pre('save', async function (next) {
    if (!tracktionDays) {
        tracktionDays = new Array(21).fill(false);
    }
    next();
});

const Habit = model('Habit', habitSchema);
  
module.exports = Habit;
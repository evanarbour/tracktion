const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const goalSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  goalSteps: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  goalEndDate: {
    type: Date,
    get: (timestamp) => dateFormat(timestamp),
  },
});


const Goal = model('Goal', goalSchema);

module.exports = Goal;

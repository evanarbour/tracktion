const { Schema, model } = require("mongoose");
import { GraphQLDate } from 'graphql-iso-date';

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
      type: GraphQLDate,
      resolve: () => new Date(Date)
  },
});

const Goal = model('Goal', goalSchema);

model.exports = Goal;

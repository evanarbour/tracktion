const { Schema, model } = require('mongoose');

const goalStepSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	completed: {
		type: Boolean,
        default: false
	},
});

const GoalStep = model('GoalStep', goalStepSchema);

module.exports = GoalStep;

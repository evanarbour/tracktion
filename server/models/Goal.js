const { Schema, model } = require('mongoose');

const goalSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	goalSteps: [
		{
			type: Schema.Types.ObjectId,
			ref: 'GoalStep',
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
	goalEndDate: {
		type: Date,
	},
});

const Goal = model('Goal', goalSchema);

module.exports = Goal;

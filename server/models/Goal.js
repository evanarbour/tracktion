const { Schema, model } = require('mongoose');
const GoalStep = require('./GoalStep');
const User = require('./User');

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
	createdBy: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

/* Since we're calling this 'findOneAndDelete' from the resolvers.js on the Model (not a document),
	we need to get the '_id' from the query filter and retrieve the document in order to access the goalSteps to be removed and
	user from which to remove this goal reference. */
goalSchema.pre('findOneAndDelete', async function(next) {
	// Get the '_id' parameter of the source 'findOne' query
	const goalId = this.getFilter()["_id"];
	// Use that value to find the goal document that we're deleting
	const goal = await Goal.findById(goalId);
	// Delete all goalSteps referenced by this goal document
	await GoalStep.deleteMany({ "_id": { $in: goal.goalSteps }})
	// Remove this goal document from the user's 'goals' list
	await User.findByIdAndUpdate(goal.createdBy, {
		$pull: {
			goals: goalId
		}
	});
	// Allow the 'AndDelete' piece of the query to proceed
	next();
});

const Goal = model('Goal', goalSchema);

module.exports = Goal;

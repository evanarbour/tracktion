const { Schema, model } = require('mongoose');
const User = require('./User');

const habitSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	tracktionDays: {
		type: [Boolean],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	createdBy: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

habitSchema.pre('save', async function (next) {
	if (this.tracktionDays.length === 0) {
		this.tracktionDays = new Array(21).fill(false);
	}
	next();
});

/* Since we're calling this 'findOneAndDelete' from the resolvers.js on the Model (not a document),
	we need to get the '_id' from the query filter and retrieve the document in order to access the user from
	which to remove this habit reference. */
	habitSchema.pre('findOneAndDelete', async function(next) {
		// Get the '_id' parameter of the source 'findOne' query
		const habitId = this.getFilter()["_id"];
		// Use that value to find the habit document that we're deleting
		const habit = await Habit.findById(habitId);
		// Remove this habit document from the user's 'habits' lists
		await User.findByIdAndUpdate(habit.createdBy, {
			$pull: {
				habits: habitId
			}
		});
		// Allow the 'AndDelete' piece of the query to proceed
		next();
	});

const Habit = model('Habit', habitSchema);

module.exports = Habit;

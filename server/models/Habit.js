const { Schema, model } = require('mongoose');

const habitSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	tracktionDays: {
		type: [Boolean],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

habitSchema.pre('save', async function (next) {
	if (this.tracktionDays.length === 0) {
		this.tracktionDays = new Array(21).fill(false);
	}
	next();
});

const Habit = model('Habit', habitSchema);

module.exports = Habit;

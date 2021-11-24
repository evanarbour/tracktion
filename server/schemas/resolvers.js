const { AuthenticationError } = require('apollo-server-express');
const { User, Habit, Goal } = require('../models');
const { signToken } = require('../utils/auth');
const { GraphQLScalarType, Kind } = require('graphql');
const dateFormat = require('../utils/dateFormat');

const resolvers = {
	// Creating a custom Date scalar type.
	// Reference: https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/
	Date: new GraphQLScalarType({
		name: 'Date',
		description: 'Date custom scalar type',
		serialize(value) {
			return dateFormat(value); // Format the outgoing Date into a human-readable string
		},
		parseValue(value) {
			return new Date(value); // Convert incoming integer to Date
		},
		parseLiteral(ast) {
			if (ast.kind === Kind.INT) {
				return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
			}
			return null; // Invalid hard-coded value (not an integer)
		},
	}),
	Query: {
		/**
		 * Retrieves a user by their username.
		 * @param {*} parent
		 * @param {*} args Contains the username.
		 * @returns The user with populated data.
		 */
		user: async (parent, { username }) => {
			return await User.findOne({ username })
				.populate('habits')
				.populate('sharedHabits')
				.populate('goals');
		},
	},
	Mutation: {
		/**
		 * Creates a new user.
		 * @param {*} parent
		 * @param {*} newUser Contains username, email and password.
		 * @returns The newly created user along with a token for future authentication.
		 */
		addUser: async (parent, newUser) => {
			// Create a new user in the database using the supplied information
			const user = await User.create(newUser);
			const token = signToken(user);

			return { token, user };
		},
		/**
		 * Creates a new habit for the logged-in user.
		 * @param {*} parent
		 * @param {*} args Contains the name of the habit.
		 * @param {*} context Resolver context containing user information.
		 * @returns The newly created habit.
		 */
		addHabit: async (parent, { name }, context) => {
			// Make sure we have a user to add the new habit to
			if (context.user) {
				// Create a new habit in the database using the supplied name
				const habit = await Habit.create({ name });

				// Find the logged-in user and add the new habit to their 'habits' array
				await User.findByIdAndUpdate(context.user._id, {
					$addToSet: { habits: habit._id },
				});

				return habit;
			}

			throw new AuthenticationError('Not logged in');
		},
		/**
		 * Updates an existing habit.
		 * @param {*} parent
		 * @param {*} args Contains habitId and newHabitData to be updated.
		 * @returns The updated habit.
		 */
		updateHabit: async (parent, { habitId, newHabitData }) => {
			// Find the habit we are wanting to update and retrieve a copy of the 'tracktionDays' array to be updated
			let tracktionDays = (await Habit.findById(habitId)).tracktionDays;
			if (tracktionDays) {
				// Update the target index with the new value (true/false).
				tracktionDays[newHabitData.index] = newHabitData.value;
			}

			// Update the habit by setting back the updated 'tracktionDays' array and return the updated habit
			return await Habit.findByIdAndUpdate(
				habitId,
				{ tracktionDays: tracktionDays },
				{ new: true }
			);
		},
		/**
		 * Creates a new goal for the logged-in user.
		 * @param {*} parent
		 * @param {*} args Contains the name of the goal.
		 * @param {*} context Resolver context containing user information.
		 * @returns The newly created goal.
		 */
		addGoal: async (parent, { name, goalSteps, goalEndDate }, context) => {
			// Make sure we have a user to add the new goal to
			if (context.user) {
				// Create a new goal in the database using the supplied name
				const goal = await Goal.create({ name, goalSteps, goalEndDate });
				console.log(goal);
				console.log(context.user);
				// Find the logged-in user and add the new goal to their 'goals' array
				await User.findByIdAndUpdate(context.user._id, {
					$addToSet: { goals: goal._id },
				});

				return goal;
			}

			throw new AuthenticationError('Not logged in');
		},
		/**
		 * Updates an existing goal.
		 * @param {*} parent
		 * @param {*} args Contains goalId, goalSteps and goalEndDate to be updated.
		 * @returns The updated goal.
		 */
		updateGoal: async (parent, { goalId, goalSteps, goalEndDate }) => {
			// Find the goal we are wanting to update
			let currentGoal = await Goal.findById(goalId);
			if (currentGoal) {
				// Update the properties of the current goal
				currentGoal.goalSteps = goalSteps;
				currentGoal.goalEndDate = goalEndDate;
			}

			// Update the goal by setting back the updated object properties
			return await Goal.findByIdAndUpdate(
				goalId,
				{ ...currentGoal },
				{ new: true }
			);
		},
		/**
		 * Processes a login request for a user.
		 * @param {*} parent 
		 * @param {*} args Contains the email and password for the login request.
		 * @returns The logged-in user and token for future authentication.
		 */
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const token = signToken(user);

			return { token, user };
		},
	},
};

module.exports = resolvers;

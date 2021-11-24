const { gql } = require('apollo-server-express');

const typeDefs = gql`

	scalar Date

	type User {
		_id: ID
		username: String
		email: String
		habits: [Habit]
		sharedHabits: [Habit]
		goals: [Goal]
	}

	type Habit {
		_id: ID
		name: String
		tracktionDays: [Boolean]
		createdAt: Date
	}

	type Goal {
		_id: ID
		name: String
		goalSteps: [GoalStep]
		createdAt: Date
		goalEndDate: Date
	}

	type GoalStep {
		_id: ID
		name: String
		completed: Boolean
	}

	type Auth {
		token: ID
		user: User
	}

	input UpdateHabitInput {
		index: Int
		value: Boolean
	}

	type Query {
		user(username: String!): User
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		addHabit(name: String!): Habit
		updateHabit(habitId: ID!, newHabitData: UpdateHabitInput): Habit
		addGoal(name: String!, goalSteps: [String]!, goalEndDate: Date): Goal
		updateGoal(goalId: ID!, goalSteps: [String]!, goalEndDate: Date): Goal
		login(email: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;

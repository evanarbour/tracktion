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

	input TracktionDaysInput {
		index: Int
		value: Boolean
	}

	type Query {
		user(username: String!): User
	}

	type Mutation {
		addUser(username: String, email: String!, password: String!): Auth
		addHabit(name: String!): Habit
		addGoal(name: String!, steps: [String]!, endDate: Date): Goal
		addGoalStep(goalId: ID!, name: String!): Goal
		updateHabit(habitId: ID!, input: TracktionDaysInput): Habit
		updateGoal(goalId: ID!, endDate: Date): Goal
		updateGoalStep(goalStepId: ID!, completed: Boolean!): GoalStep
		removeHabit(habitId: ID!): Habit
		removeGoal(goalId: ID!): Goal
		removeGoalStep(goalStepId: ID!): GoalStep
		login(email: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;

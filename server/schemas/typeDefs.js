const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    habits: [Habit]
  }

  type Habit {
    name: String
    tracktionDays: [Boolean]
    createdAt: String
  }

  type Goal {
    name: String
    goalSteps: [String]
    createdAt: String
    goalEndDate: Date
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
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

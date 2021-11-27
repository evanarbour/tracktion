import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_HABIT = gql`
    mutation addHabit($name: String!) {
        addHabit(name: $name) {
            _id
            name
            tracktionDays
            createdAt
        }
    }
`;

export const ADD_GOAL = gql`
    mutation addGoal($name: String!, $steps: [String]!, $endDate: Date) {
        addGoal(name: $name, steps: $steps, endDate: $endDate) {
            _id
            name
            goalSteps {
                _id
                name
                completed
            }
            goalEndDate
            createdAt
        }
    }
`;

export const ADD_GOAL_STEP = gql`
    mutation addGoalStep($id: ID!, $name: String!) {
        addGoalStep(goalId: $id, name: $name) {
            _id
            name
            goalSteps {
                _id
                name
                completed
            }
            goalEndDate
            createdAt
        }
    }
`;

export const UPDATE_HABIT = gql`
    mutation updateHabit($id: ID!, $input: TracktionDaysInput) {
        updateHabit(habitId: $id, input: $input) {
            _id
            name
            tracktionDays
            createdAt
        }
    }
`;

export const UPDATE_GOAL = gql`
    mutation updateGoal($id: ID!, $endDate: Date) {
        updateGoal(goalId: $id, endDate: $endDate) {
            _id
            name
            goalSteps {
                _id
                name
                completed
            }
            goalEndDate
            createdAt
        }
    }
`;

export const UPDATE_GOAL_STEP = gql`
    mutation updateGoalStep($id: ID!, $completed: Boolean!) {
        updateGoalStep(goalStepId: $id, completed: $completed) {
            _id
            name
            completed
        }
    }
`;

export const REMOVE_HABIT = gql`
    mutation removeHabit($id: ID!) {
        removeHabit(habitId: $id) {
            _id
            name
            tracktionDays
            createdAt
        }
    }
`;

export const REMOVE_GOAL = gql`
    mutation removeGoal($id: ID!) {
        removeGoal(goalId: $id) {
            _id
            name
            goalSteps {
                _id
                name
                completed
            }
            goalEndDate
            createdAt
        }
    }
`;

export const REMOVE_GOAL_STEP = gql`
    mutation removeGoalStep($id: ID!) {
        removeGoalStep(goalStepId: $id) {
            _id
            name
            completed
        }
    }
`;

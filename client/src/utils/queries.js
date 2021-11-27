import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query getUser($username: String!) {
        user(username: $username) {
            _id
            username
            email
            habits {
                _id
                name
                tracktionDays
                createdAt
            }
            sharedHabits {
                _id
                name
                tracktionDays
                createdAt
            }
            goals {
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
    }
`;

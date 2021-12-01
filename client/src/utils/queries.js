import { gql } from '@apollo/client';

export const QUERY_GETUSER = gql`
    query getUser($username: String!) {
        getUser(username: $username) {
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

export const QUERY_ME = gql`
{
    me {
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
}`
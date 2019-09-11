import { gql }  from 'apollo-boost';

const createUser = gql`
    mutation($data: CreateUserInput!) {
        createUser(data: $data) {
            token
            user {
                id
                name
                email
            }
        }
    }
`;

const getProfile = gql`
    query {
        me {
            id
            name
            email
        }
    }
`;

const login = gql`
    mutation($data: LoginUserInput!) {
        login(data: $data) {
            token
            user {
                name
            }
        }
    }
`;

export {
    createUser,
    login,
    getProfile
}
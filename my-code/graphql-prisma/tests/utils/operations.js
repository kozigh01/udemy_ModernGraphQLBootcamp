import { gql }  from 'apollo-boost';

const getUsers = gql`
    query {
        users {
            id
            name
            email
        }
    }
`;

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

const getPosts = gql`
    query {
        posts {
            title
            body
            published
        }
    }
`;

const getMyPosts = gql`
    query {
        myPosts {
            title
            body
            published
        }
    }
`;

const updatePost = gql`
    mutation($id: ID!) {
        updatePost(
            id: $id,
            data: {
                published: false
            }
        ) {
            published
        }
    }
`;

export {
    getUsers,
    createUser,
    login,
    getProfile,
    getPosts,
    getMyPosts,
    updatePost
}
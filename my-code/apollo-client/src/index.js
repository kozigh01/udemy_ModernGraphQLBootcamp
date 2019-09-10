import ApolloBoost, { gql } from 'apollo-boost';


const client = new ApolloBoost({
    uri: 'http://localhost:4000'
});

const getUsers = gql`
    query {
        users {
            id
            name
            email
        }
    }
`;

client.query({
    query: getUsers
}).then((response) => {
    console.log(response.data);

    let html = '<h1>Users</h1>';

    response.data.users.forEach(user => {
        html += `
            <div>
                <h3>${user.name}</h3>
            </div>
        `;
    });

    document.querySelector('#users').innerHTML = html;
});


const getPosts = gql`
    query {
        posts {
            title
            author {
                name
            }
        }
    }
`;

client.query({
    query: getPosts
}).then(response => {
    console.log(response.data);

    let html = '<h1>Posts</h1>';

    response.data.posts.forEach(post => {
        html += `
            <div>
                <h3>${post.title}, by: ${post.author.name}</h3>
            </div>
        `;
    });

    document.querySelector('#posts').innerHTML = html;
});



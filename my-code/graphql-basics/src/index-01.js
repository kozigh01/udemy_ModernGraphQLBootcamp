import { GraphQLServer } from 'graphql-yoga';
import { GraphQLBoolean } from 'graphql';

// Type Definitions (schema)
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`;

// Resolvers
const resolvers = {
    Query: {
        hello() {
            return 'This is my first query!';
        },
        name() {
            return 'Mark Kozi'
        },
        location() {
            return 'Bellbrook'
        },
        bio() {
            return 'I am me'
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});

server.start(() => {
    console.log('The server is up');
})
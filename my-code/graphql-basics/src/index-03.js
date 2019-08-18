import { GraphQLServer } from 'graphql-yoga';
import { GraphQLBoolean } from 'graphql';

// Type Definitions (schema)
const typeDefs = `
    type Query {
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: Boolean!
    }
`;

// Resolvers
const resolvers = {
    Query: {
        title() {
            return 'A title';
        },
        price() {
            return 105.75;
        },
        releaseYear() {
            return null;
        },
        rating() {
            return null;
        },
        inStock() {
            return false;
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
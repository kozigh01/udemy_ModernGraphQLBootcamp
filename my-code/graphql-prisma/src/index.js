import "@babel/polyfill/noConflict";

import { GraphQLServer, PubSub } from 'graphql-yoga';

import db from './db';
import prisma from './prisma';
import { resolvers, fragmnetReplacements } from './resolvers/index';

const pubsub = new PubSub();

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context(request) {
        return {
            db,
            pubsub,
            prisma,
            request,
        };
    },
    fragmnetReplacements,
});

server.start({
    port: process.env.PORT
}, () => {
    console.log(`The server is up at:: http://localhost:${process.env.PORT}`);
});
import 'cross-fetch/polyfill';
import { gql }  from 'apollo-boost';
import prisma from '../../src/prisma.js';

import getClient from '../utils/getClient';
import seedTestDatabase, { userOne } from '../utils/seedDatabase';


const client = getClient();

beforeEach(seedTestDatabase);

test('should create new user', async () => {
    const createUser = gql`
        mutation {
            createUser(
                data: {
                    name: "Mark",
                    email: "mark.k@test.com",
                    password: "myPass123"
                }
            ) {
                token
                user {
                    id
                }
            }
        }
    `;
    
    const response = await client.mutate({ mutation: createUser });

    const userExists = await prisma.exists.User({ id: response.data.createUser.user.id });
    expect(userExists).toBe(true);
});

test('Should login with good credentials', async () => {
    const login = gql`
        mutation {
            login(data: {
                email: "m@test.com",
                password: "mysupersecretpassword"
            }) {
                token
                user {
                    name
                }
            }
        }
    `;

    const response = await client.mutate({ mutation: login});

    expect(response.data.login.user.name).toBe('Mark');
    
});

test('Should not login with bad credentials', async () => {
    const login = gql`
        mutation {
            login(data: {
                email: "m@test.com",
                password: "mysupersecretpasswordx"
            }) {
                token
            }
        }
    `;

    await expect(client.mutate({ mutation: login})).rejects.toThrow();
});

test('Should not be able to create user with short password', async () => {
    const createUser = gql`
        mutation {
            createUser(data: {
                name: "tester01",
                email: "testero1@testing.com",
                password: "abcd123"
            }) {
                token
            }
        }
    `;

    await expect(client.mutate({ mutation: createUser })).rejects.toThrow();
});

test('Should fetch user profile', async () => {
    const client = getClient(userOne.jwt);

    const getProfile = gql`
        query {
            me {
                id
                name
                email
            }
        }
    `;

    const { data } = await client.query( { query: getProfile });

    expect(data.me.id).toBe(userOne.user.id);
    expect(data.me.name).toBe(userOne.user.name);
    expect(data.me.email).toBe(userOne.user.email);
});
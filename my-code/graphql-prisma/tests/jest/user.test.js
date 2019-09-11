import 'cross-fetch/polyfill';
import prisma from '../../src/prisma.js';

import getClient from '../utils/getClient';
import seedTestDatabase, { userOne } from '../utils/seedDatabase';
import { createUser, getProfile, login } from '../utils/operations';


const client = getClient();


beforeEach(seedTestDatabase);

test('should create new user', async () => {
    const variables = {
        data: {
            name: "tester01",
            email: "testero1@testing.com",
            password: "abcd1234"
        }
    };
    
    const response = await client.mutate({ 
        mutation: createUser,
        variables
    });

    const userExists = await prisma.exists.User({ id: response.data.createUser.user.id });
    expect(userExists).toBe(true);
});

test('Should login with good credentials', async () => {
    const variables = {
        data: {
            email: "m@test.com",
            password: "mysupersecretpassword"
        }
    }

    const response = await client.mutate({ 
        mutation: login,
        variables
    });

    expect(response.data.login.user.name).toBe('Mark');
});

test('Should not login with bad credentials', async () => {
    const variables = {
        data: {
            email: "m@test.com",
            password: "mysupersecretpasswordx"
        }
    };  

    await expect(client.mutate({ 
        mutation: login,
        variables
    })).rejects.toThrow();
});

test('Should not be able to create user with short password', async () => {
    const variables = {
        data: {
            name: "tester01",
            email: "testero1@testing.com",
            password: "abcd123"
        }
    };

    await expect(client.mutate({ 
        mutation: createUser,
        variables
    })).rejects.toThrow();
});

test('Should fetch user profile', async () => {
    const client = getClient(userOne.jwt);

    const { data } = await client.query( { query: getProfile });

    expect(data.me.id).toBe(userOne.user.id);
    expect(data.me.name).toBe(userOne.user.name);
    expect(data.me.email).toBe(userOne.user.email);
});
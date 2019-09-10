import bcrypt from 'bcrypt';
import prisma from '../../src/prisma.js';
import jwt from 'jsonwebtoken';

const userOne = {
    input: {
        name: 'Mark',
        email: 'm@test.com',
        password: bcrypt.hashSync('mysupersecretpassword', bcrypt.genSaltSync(10))
    },
    user: undefined,
    jwt: undefined
};

const postOne = {
    input: {
        title: "This is post 01",
        body: "I am the body for post 01",
        published: true,
    },
    post: undefined,
};

const postTwo = {
    input: {
        title: "This is post 02",
        body: "I am the body for post 02",
        published: false,
    },
    post: undefined,
};

const seedTestDatabase = async () => {
    // delete test data
    await prisma.mutation.deleteManyPosts();
    await prisma.mutation.deleteManyUsers();

    // create user one
    userOne.user = await prisma.mutation.createUser({
        data: userOne.input
    });
    userOne.jwt = jwt.sign({ userId: userOne.user.id }, process.env.JWT_SECRET);

    postOne.post = await prisma.mutation.createPost({
        data: {
            ...postOne.input,
            author: {
                connect: {
                    id: userOne.user.id
                }
            }
        }
    });

    postTwo.post = await prisma.mutation.createPost({
        data: {
            ...postTwo.input,
            author: {
                connect: {
                    id: userOne.user.id
                }
            }
        }
    });
}

export {
    seedTestDatabase as default,
    userOne,
    postOne,
    postTwo
}
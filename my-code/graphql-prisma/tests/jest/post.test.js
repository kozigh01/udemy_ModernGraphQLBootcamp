import 'cross-fetch/polyfill';
import { gql }  from 'apollo-boost';
import prisma from '../../src/prisma.js';

import getClient from '../utils/getClient';
import seedTestDatabase, { userOne, postOne, postTwo } from '../utils/seedDatabase';
import { printSchema } from 'graphql';
import { getUsers, getPosts, getMyPosts, updatePost} from '../utils/operations';


const client = getClient();

beforeEach(seedTestDatabase);


test('Should return published posts', async () => {
    const response = await client.query({ query: getPosts });

    expect(response.data.posts.length).toBe(1);
    expect(response.data.posts)
});

test('Should expose public author profiles', async() => {
    const response = await client.query({ query: getUsers });

    expect(response.data.users.length).toBe(1);
    expect(response.data.users[0].email).toBe(null);
    expect(response.data.users[0].name).toBe('Mark');
});

test('Should return my posts for logged in user', async () => {
    const client = getClient(userOne.jwt);

    const { data } = await client.query({ query: getMyPosts });

    expect(data.myPosts.length).toBe(2);
});

test('Should be able to update a post', async () => {
    const client = getClient(userOne.jwt);

    // const updatePost = gql`
    //     mutation {
    //         updatePost(
    //             id: "${postOne.post.id}",
    //             data: {
    //                 published: false
    //             }
    //         ) {
    //             published
    //         }
    //     }
    // `;

    const variables = {
        id: postOne.post.id
    };

    const { data } = await client.mutate({ 
        mutation: updatePost,
        variables
    });    
    const exists = await prisma.exists.Post({ id: postOne.post.id, published: false });

    expect(data.updatePost.published).toBe(false);   
    expect(exists).toBe(true);
});

test('Should be able to create a post', async () => {
    const client = getClient(userOne.jwt);

    const createPost = gql`
        mutation {
            createPost(
                data: {
                    title: "This is post 3",
                    body: "I am the body for post 03",
                    published: false,
                }
            ) {
                id
            }
        }
    `;

    const { data } = await client.mutate({ mutation: createPost });
    const response = await prisma.query.posts();

    expect(response.length).toBe(3);
});

test('Should be able to delete a post', async () => {
    const client = getClient(userOne.jwt);

    const deletePost = gql`
        mutation {
            deletePost(id: "${postOne.post.id}") {
                id
            }
        }
    `;    

    const { data } = await client.mutate({ mutation: deletePost});
    const exists = await prisma.exists.Post({ id: postOne.post.id });

    expect(data.deletePost.id).toBe(postOne.post.id);
    expect(exists).toBe(false);
});

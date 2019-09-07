import { Prisma } from 'prisma-binding';
import { fragmnetReplacements } from './resolvers/index';

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    fragmentReplacements: fragmnetReplacements,
});

export {
    prisma as default,
}

// prisma.query.users(null, '{ id name email posts { id title } }')
//     .then(data => {
//         console.log('Data:: ', JSON.stringify(data, undefined, 4));
//     })
//     .catch(err => console.error(err));

// prisma.query.comments(null, '{ id text author { id name} post { id title } }')
//     .then(data => {
//         console.log("Data:: ", JSON.stringify(data, undefined, 4))
//     });

// prisma.mutation.createUser({
//     data: {
//         name: 'Dude Perfect',
//         email: 'd.p@testing.com'
//     }
// }, '{ id name email }').then(data => {
//     console.log('User Create::', JSON.stringify(data));
// });

// prisma.mutation.deleteUser({
//     where: {
//         id: 'cjzalxcdl004s0708d9za3nx3'
//     }
// }).then((data) => {
//     console.log('User Deleted::', JSON.stringify(data));
// })


// prisma.mutation.createPost({
//     data: {
//         title: "Using prisma node bindings - :-)",
//         body: "This is cool!!!",
//         published: false,
//         author: {
//             connect: {
//                 id: 'cjzalx9fv004h0708t8u387wj'
//             }
//         }
//     } }, '{ id  title body author { id name } }' )
//     .then(data => {
//         // console.log("Data:: ", JSON.stringify(data, undefined, 4));
//         return prisma.query.users(null, '{ id name email posts { id title }}');
//     }).then((data) => {
//         console.log('Data::', JSON.stringify(data, undefined, 4));
//     });

// prisma.mutation.updatePost({
//     data: {
//         title: 'updated post 2',
//         published: true,
//     },
//     where: {
//         id: 'cjzam51tb009w07082a4yln02',
//     }
// }, '{ id title body published author { id name} }')
//     .then(data => {
//         console.log("Update Post::", JSON.stringify(data));
//         return prisma.query.posts(null, '{ id title body published author { id name }}');
//     }).then(data => {
//         console.log("Posts::", JSON.stringify(data));
//     })
//     .catch(err => console.error(err));

// prisma.query.posts(null, '{ id title body published author { id name } }')
// //     .then(data => console.log('Posts::', JSON.stringify(data)));


// prisma.exists.Post({ 
//     id: 'cjzb6yzgv00p60708i5rpwpfw',
//     author: {
//         id: 'cjzalx9fv004h0708t8u387wj'
//     }
//  }).then((exists) => console.log('Exists::', exists));

// const createPostForUser = async ({
//     authorId,
//     post: {
//         title = '',
//         body = '',
//         published = false,
//         author = -1
//     } = {}} ) => {

//     const authorExists = await prisma.exists.User({ id: authorId });
//     if(!authorExists) throw new Error('Author does not exist');

//     console.log(authorExists, authorId, title, body, published, author);

//     const post = await prisma.mutation.createPost({
//         data: {
//             title: title,
//             body: body,
//             published: published,
//             author: {
//                 connect: {
//                     id: author
//                 }
//             }
//         }
//     }, '{ id title body author { id name posts { id title body } } }');

//     // const users = await prisma.query.users(null, '{ id name posts { id title body }}');
//     // console.log(JSON.stringify(users, null, 4));
    
//     return post.author;
// };

// createPostForUser({authorId: '1', post: { 
//     title: "the title", 
//     body: "the body", 
//     published: false, 
//     author: 'cjzalx9fv004h0708t8u387wj3'}
// }).then(data => {
//     console.log(JSON.stringify(data, null, 4));
// }).catch(err => console.log(err));


// let updatePostForUser = async (postId, data) => {
//     const postExists = prisma.exists.Post({ id: postId });

//     if(!postExists) throw new Error('Post does not exist');

//     const post = await prisma.mutation.updatePost(
//         {
//             data,
//             where: {id: postId}, 
//         },
//         '{author { id name posts { id title body published } }}');
//     console.log(JSON.stringify(post, null, 4));
//     // let user = await prisma.query.users( { where: { id: post.author.id } }, '{id name posts { id title body published}}');
//     return post.author;
// };

// updatePostForUser('cjzam51tb009w07082a4yln02x', { title: "new title", body: "new body", published: false})
//     .then((data) => console.log('Updated Post User::', JSON.stringify(data, null, 4)))
//     .catch(err => console.log(err));

// console.log('starting');
// updatePostForUser('cjzbzr6fc07mr0708ci145vj4', { title: 'Updated Title', body: 'Updated Body', published: true})
//     .then(data => {
//         console.log(JSON.stringify(data, null, 4));
//     });
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import getUserId, { SECRET } from '../utils/getUserId';

// const token = jwt.sign({ id: 46 }, 'mysecret');
// console.log(token);
// const decoded = jwt.decode(token);
// console.log(decoded);
// const decoded2 = jwt.verify(token, 'mysecret');
// console.log(decoded2);

// const dummy = async () => {
//     const email = 'mytestpassword';
//     const password = 'mysupersecretPW';
//     const pw_hashed = '$2b$10$cTS8AsvcTeDTHb39rHBgH.p0Z9M1JoYKzkD70gpXeZjhgOmMmv21u';

//     const isMatch = await bcrypt.compare(password, pw_hashed);
//     console.log(isMatch);
// }
// dummy();

export default {
    async login(parent, args, { prisma }, info) {
        const user = await prisma.query.user({
            where: {
                email: args.data.email 
            }
        });
        if (!user) {
            throw new Error('Login:: unable to login');
        }

        const isValidPassword = await bcrypt.compare(args.data.password, user.password);
        if (!isValidPassword) {
            throw new Error('Login:: unable to login');
        }

        return {
            user: user,
            token: jwt.sign({ userId: user.id }, SECRET),
        }
    },
    async createUser(parent, args, { prisma }, info) {
        const emailToken = await prisma.exists.User({ email: args.data.email });

        if(emailToken) {
            throw new Error('Email is already taken - select a new email');
        }
        
        if (args.data.password.length < 8) {
            throw new Error('Password must be at least 8 characters long');
        }

        const password = await bcrypt.hash(args.data.password, 10);

        const user = await prisma.mutation.createUser({ 
            data: { ...args.data, password } 
        });

        return {
            user,
            token: jwt.sign({ userId: user.id }, SECRET)
        };
    },
    async deleteUser(parent, args, { prisma, request }, info) {
        const userId = getUserId(request);

        const exists = await prisma.exists.User({ id: userId });

        if (!exists) {
            throw new Error('User not found');
        }

        return await prisma.mutation.deleteUser( { where: { id: userId }, info } );
    },
    async updateUser(parent, args, { prisma, request }, info) {
        const userId = getUserId(request);

        return prisma.mutation.updateUser({ 
                data: args.data, 
                where: { id: userId } 
            },
            info);
    },
    async createPost(parent, args, { prisma, request }, info) {
        const userId = getUserId(request);

        return prisma.mutation.createPost({
            data: {
                title: args.data.title,
                body: args.data.body,
                published: args.data.published,
                author: {
                    connect: {
                        id: userId,
                    }
                }
            }
        }, info);
    },
    async deletePost(parent, args, { prisma, request }, info) {
        const userId = getUserId(request);

        const postExists = await prisma.exists.Post({
            id: args.id,
            author: {
                id: userId
            }
        });

        if (!postExists) {
            throw new Error("Delete Post:: Unable to delete post");
        }

        return prisma.mutation.deletePost( { where: { id: args.id }}, info );
    },
    async updatePost(parent, { id, data }, { prisma, request }, info) {
        const userId = getUserId(request);

        const postExists = await prisma.exists.Post({
            id: id,
            author: {
                id: userId
            }
        });
        if (!postExists) {
            throw new Error('Unable to update Post');
        }

        return prisma.mutation.updatePost({
            data: {
                title: data.title,
                body: data.body,
                published: data.published,
                author: {
                    connect: {
                        id: userId,
                    }
                }
            },
            where: {
                id: id,
            }
        }, info);
    },
    async createComment(parent, args, { prisma, request }, info) {
        const userId = getUserId(request);

        const postExists = await prisma.exists.Post({
            id: args.data.post,
            published: true,
        });
        if (!postExists) { throw new Error('can not create comment')}

        return prisma.mutation.createComment({
            data: {
                text: args.data.text,
                author: {
                    connect: {
                        id: userId,
                    }
                },
                post: {
                    connect: {
                        id: args.data.post,
                    }
                },
            },
        }, info);
    },
    async deleteComment(parent, args, { prisma, request }, info) {
        const userId = getUserId(request);

        const commentExists = await prisma.exists.Comment({
            id: args.id,
            author: {
                id: userId,
            }
        });
        if (!commentExists) { throw new Error('Unable to delete comment')}

        return prisma.mutation.deleteComment({
            where: {
                id: args.id,
            }
        }, info);
    },
    updateComment(parent, { id, data }, { prisma, request }, info) {
        const userId = getUserId(request);

        const commentExists = prisma.exists.Comment({
            id,
            author: {
                id: userId
            }
        });
        if (!commentExists) { throw new Error('Uanble to update comment')};

        return prisma.mutation.updateComment({
            data,
            where: {
                id: id,
            }
        }, info);
    }
}
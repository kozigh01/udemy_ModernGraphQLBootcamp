import getUserId from '../utils/getUserId';

const Query = {
    users(parent, args, { prisma }, info) {
        const opArgs = {
            first: args.first,
            skip: args.skip,
            after: args.after,
            orderBy: args.orderBy,
        };

        if(args.query) {
            opArgs.where = {
                OR: [
                    { name_contains: args.query }
                ]
            };
        }

        return prisma.query.users(opArgs, info);
    },
    posts(parent, args, { prisma }, info) {
        const opArgs = {
            first: args.first,
            skip: args.skip,
            after: args.after,
            orderBy: args.orderBy,
        };

        if(args.query) {
            opArgs.where = {
                OR: [
                    { title_contains: args.query },
                    { body_contains: args.query },
                ]
            }
        }

        return prisma.query.posts(opArgs, info);
        // if (!args.query) return db.posts;
        // return db.posts.filter(p => p.title.toLowerCase().includes(args.query.toLowerCase()) || p.body.toLowerCase().includes(args.query.toLowerCase()));
    },
    async post(parent, args, { prisma, request}, info) {
        const userId = getUserId(request);
        console.log(userId);

        const posts =  await prisma.query.posts({
            where: {
                id: args.id,
                OR: [
                    { published: true },
                    { author: { id: userId }}
                ]
            }
        }, info);

        if (posts.length === 0 ) { throw new Error('Post not found')}

        return posts[0];
    },
    comments(parent, args, { prisma }, info) {
        const opArgs = {
            skip: args.skip,
            first: args.first,
            after: args.after,
            orderBy: args.orderBy,
        };

        if(args.query) {
            opArgs.where = {
                text_contains: args.query
            }
        }

        return prisma.query.comments(opArgs, info);
    }
}

export {
    Query as default,
}
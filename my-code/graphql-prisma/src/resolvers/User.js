import getUserId from '../utils/getUserId';
import { Prisma } from 'prisma-binding';

const User = {
    email: {
        fragment: 'fragment userId on User { id }',
        resolve(parent, args, { request }, info) {
            const userId = getUserId(request, false);
    
            if(userId && userId === parent.id) {
                return parent.email;
            } else {
                return null;
            }
        }
    },
    posts: {
        fragment: 'fragment userId on User { id }',
        resolve(parent, args, { prisma, request }, info) {
            return prisma.query.posts({
                where: {
                    AND: [
                        { published: true },
                        { author: { id: parent.id } }
                    ]
                }
            }, info);
        }
    }
}

export {
    User as default,
}
import uuidv4 from 'uuid/v4';


export default {
    createUser(parent, args, ctx, info) {
        const emailTaken = ctx.db.users.some(u => u.email.toLowerCase() === args.data.email.toLowerCase());

        if (emailTaken) {
            throw new Error('Email is already being used - please select a new email');
        }

        const user = {
            id: uuidv4(),
            ...args.data,
            bogus1: 'bogus1 prop',
            bogus2: 'bogus2 prop',
        }

        ctx.db.users.push(user);
        
        return user;
    },
    deleteUser(parent, args, { db }, info) {
        const user = db.users.find(u => u.id === args.id);

        if (!user) {
            throw new Error('User not found');
        }

        db.posts
            .filter(p => p.author === args.id)
            .forEach(p => {
                db.comments = db.comments.filter(c => c.post === p.id);
            });

        db.posts = db.posts.filter(p => p.author !== args.id);
        db.comments = db.comments.filter(c => c.author !== args.id);
        db.users = db.users.filter(u => u.id !== args.id);

        return user;
    },
    updateUser(parent, args, { db }, info) {
        const { id, data } = args;

        const user = db.users.find(u => u.id === id);

        if (!user) throw new Error('User not found');

        if (typeof data.email === 'string') {
            const emailTaken = db.users.some(u => u.email.toLowerCase() === data.email.toLowerCase());

            if (emailTaken) {
                throw new Error('Email is already being used - please select a new email');
            }

            user.email = data.email;
        }

        if (typeof data.name === 'string') {
            user.name = data.name;
        }

        if (typeof data.age !== 'undefined') {
            user.age = data.age;
        }

        return user;
    },
    createPost(parent, args, { db, pubsub }, info) {
        const userExists = db.users.some(u => u.id === args.data.author);

        if(!userExists) {
            throw new Error('The author does not exist');
        }

        const post = {
            id: uuidv4(),
            ...args.data,
        }

        db.posts.push(post);
        if (post.published) {
            pubsub.publish('post', { 
                post: { 
                    mutation: 'CREATED', 
                    data: post 
                } 
            });
        }

        return post;
    },
    deletePost(parent, args, { db, pubsub }, info) {
        const post = db.posts.find(p => p.id === args.id);

        if (!post) {
            throw new Error('Post not found');
        }

        db.comments = db.comments.filter(c => c.post !== args.id);
        db.posts = db.posts.filter(p => p.id !== args.id);

        if (post.published) {
            pubsub.publish('post', {
                post: {
                    mutation: 'DELETED',
                    data: post,
                }
            })
        }

        return post;
    },
    updatePost(parent, { id, data }, { db, pubsub }, info) {
        const post = db.posts.find(p => p.id === id);
        const originalPost = { ...post };

        if (!post) throw new Error('Post not found')

        if (typeof data.title === 'string') {
            post.title = data.title;
        }

        if (typeof data.body === 'string') {
            post.body = data.body;
        }

        if (typeof data.published === 'boolean') {
            post.published = data.published;

            if (originalPost.published && !post.published) {  // deleted
                pubsub.publish('post', {
                    post: {
                        mutation: 'DELETED',
                        data: originalPost,
                    }
                })
            } else if (!originalPost.published && post.published) { // created
                pubsub.publish('post', {
                    post: {
                        mutation: 'CREATED',
                        data: post,
                    }
                });
            }
        } else if (post.published) { // updated
            pubsub.publish('post', {
                post: {
                    mutation: "UPDATED",
                    data: post,
                }
            });
        }

        if (typeof data.author === 'string') {
            const user = db.users.find(u => u.id === data.author);

            if (!user) throw new Error('User not found');
    
            post.author = user.id;
        }

        return post;
    },
    createComment(parent, args, { db, pubsub }, info) {
        const authorExists = db.users.some(u => u.id === args.data.author);
        if (!authorExists) {
            throw new Error('Author does not exist');
        }

        const postExists = db.posts.some(p => p.id === args.data.post && p.published);
        if(!postExists) {
            throw new Error('Post does not exist or is not published');
        }

        const comment = {
            id: uuidv4(),
            ...args.data,  // available due to babel plugin 'transform-object-rest-spread'
        }

        db.comments.push(comment);
        pubsub.publish(`comment ${args.data.post}`, { 
            comment: {
                mutation: "CREATED",
                data: comment ,
            }
        });

        return comment;
    },
    deleteComment(parent, args, { db, pubsub }, info) {
        const comment = db.comments.find(c => c.id === args.id);
        if(!comment) throw new Error('Comment not found');
        db.comments = db.comments.filter(c => c.id !== args.id);

        pubsub.publish(`comment ${comment.post}`, {
            comment: {
                mutation: 'DELETED',
                data: comment,
            }
        });

        return comment;
    },
    updateComment(parent, { id, data }, { db, pubsub }, info) {
        const comment = db.comments.find(c => c.id === id );

        if (!comment) throw new Error("comment not found");

        if (typeof data.text === 'string') {
            comment.text = data.text;
        }

        pubsub.publish(`comment ${comment.post}`, {
            comment: {
                mutation: "UPDATED",
                data: comment,
            }
        });

        return comment;
    }
}
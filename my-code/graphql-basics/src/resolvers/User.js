const User = {
    posts(parent, args, { db }, info) {
        return db.posts.filter(p => p.author === parent.id);
    },
    comments(parent, age, { db }, info) {
        return db.comments.filter(c => c.author === parent.id);
    }
}

export {
    User as default,
}
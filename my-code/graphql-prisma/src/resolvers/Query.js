const Query = {
    users(parent, args, { db }, info) {
        let rtn;

        if (!args.query) {
            rtn = db.users;
        } else {
            rtn = db.users.filter(u => u.name.toLowerCase().includes(args.query.toLowerCase()));
        }

        if(args['sort']) {
            rtn = rtn.sort((a, b) => {
                if (!a.hasOwnProperty(args['sort'])) return 0;
                if (a[args['sort']] > b[args['sort']]) return 1;
                if (a[args['sort']] < b[args['sort']]) return -1;
                return 0;
            });
        }

        return rtn;
    },
    posts(parent, args, { db }, info) {
        if (!args.query) return db.posts;
        return db.posts.filter(p => p.title.toLowerCase().includes(args.query.toLowerCase()) || p.body.toLowerCase().includes(args.query.toLowerCase()));
    },
    comments(parent, args, { db }, info) {
        return db.comments;
    }
}

export {
    Query as default,
}
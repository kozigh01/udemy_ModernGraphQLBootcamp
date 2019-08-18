let demoUsers = [
    { id: '1', name: 'Mark', email: 'mk@test.com', age: 53 },
    { id: '2', name: 'Stacey', email: 'sk@test.com' },
    { id: '3', name: 'Nathan', email: 'nk@test.com', age: 15 },
];

let demoPosts = [
    { id: '101', title: "title 1", body: "post body 1", published: true, author: '2' },
    { id: '102', title: "title 2", body: "post body 2", published: false, author: '3' },
    { id: '103', title: "title 3", body: "post body 3", published: true, author: '2' },
];

let demoComments = [
    { id: '201', text: "This is comment 101", author: '3', post: '102' },
    { id: '202', text: "This is comment 102", author: '1', post: '102'},
    { id: '203', text: "This is comment 103", author: '1', post: '101' },
    { id: '204', text: "This is comment 104", author: '2', post: '103' },
];

const db = {
    users: demoUsers,
    posts: demoPosts,
    comments: demoComments,
}

export default db;
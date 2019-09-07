import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;


const getUserId = (request, requireAuth = true) => {
    const header = request.request.headers.authorization;

    if (!header) {
        if (requireAuth) {
            throw new Error("Authentication required.");
        } else {
            return null;
        }
    }

    const token = header.replace('Bearer ', '');
    const decoded = jwt.verify(token, SECRET);
    return decoded.userId;
}

export {
    getUserId as default,
    SECRET
}
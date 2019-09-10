import ApolloBoost  from 'apollo-boost';

const getClient = (jwt = undefined) => {
    return new ApolloBoost({
        uri: 'http://localhost:' + process.env.PORT,
        request(operation) {
            if (jwt) {
                operation.setContext({
                    headers: {
                        'Authorization': `Bearer ${jwt}`
                    }
                });
            }
        }
    });
}

export {
    getClient as default
}
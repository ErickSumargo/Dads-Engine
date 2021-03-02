const { ApolloError } = require('apollo-server');

const mapper = require('../../../../mapper/DadJokeMapper');

const resolver = async (_, { cursor, limit }, { verified, dataSources }) => {
    if (verified) {
        try {
            const response = await dataSources.db.dadJoke.findMany({
                cursor: {
                    id: cursor ? parseInt(cursor) : 1
                },
                skip: cursor ? 1 : 0,
                take: limit
            })
            const jokes = response.map(result => mapper(result));

            return {
                jokes: jokes,
                cursor: jokes.length ? jokes[jokes.length - 1].id : cursor,
                limit: limit
            }
        } catch (error) {
            console.log(error)
            return error
        }
    }
    throw new ApolloError('Unauthorized');
};

module.exports = resolver;

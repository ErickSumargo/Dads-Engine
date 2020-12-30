const mapper = require('../../../../mapper/DadJokeMapper');

const resolver = async (_, { cursor, limit }, { dataSources }) => {
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
};

module.exports = resolver;

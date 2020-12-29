const mapper = require('../../../../mapper/DadJokesResponseMapper')

const resolver = async (_, { page, limit, term }, { dataSources }) => {
    try {
        const response = await dataSources.dadJokesAPI.fetchDadJokes(page, limit, term);
        return mapper(response)
    } catch (error) {
        console.log(error)
        return error
    }
};

module.exports = resolver;

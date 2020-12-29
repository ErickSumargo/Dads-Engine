const mapper = require('../../../../mapper/DadJokeMapper')

const resolver = async (_, __, { dataSources }) => {
    try {
        const response = await dataSources.dadJokesAPI.fetchRandomDadJoke();
        return mapper(response)
    } catch (error) {
        console.log(error)
        return error
    }
};

module.exports = resolver;

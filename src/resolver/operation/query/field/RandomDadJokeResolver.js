const { ApolloError } = require('apollo-server');

const mapper = require('../../../../mapper/DadJokeMapper')

const resolver = async (_, __, { verified, dataSources }) => {
    if (verified) {
        try {
            const response = await dataSources.api.dadJokes.fetchRandomDadJoke();
            return mapper(response)
        } catch (error) {
            console.log(error)
            return error
        }
    }
    throw new ApolloError('Unauthorized');
};

module.exports = resolver;

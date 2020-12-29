require('dotenv').config();
const { ApolloServer, ApolloError } = require('apollo-server');

const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolvers');
const context = require('./header/Auth');

const DadJokesAPI = require('./api/DadJokesAPI');

const dataSources = () => ({
    dadJokesAPI: new DadJokesAPI()
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    context
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});

require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client')

const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolvers');
const dataSources = () => ({
    api: require('./api/Api'),
    db: new PrismaClient()
});
const context = require('./header/Auth');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    context
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});

require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolvers');
const dataSources = () => ({
    db: prisma
});
const context = require('./header/Auth');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    context,
    introspection: true,
    playground: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});

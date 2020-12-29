const jwt = require('jsonwebtoken');
const { ApolloError } = require('apollo-server');

const context = async ({ req }) => {
    const auth = (req.headers && req.headers.authorization) || '';
    const token = auth.split(" ")[1];

    try {
        jwt.verify(token, process.env.JWT_VERIFICATION_KEY);
    } catch (error) {
        throw new ApolloError('Unauthorized');
    }
};

module.exports = context;

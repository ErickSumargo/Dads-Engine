const jwt = require('jsonwebtoken');

const context = async ({ req }) => {
    const auth = (req.headers && req.headers.authorization) || '';
    const token = auth.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_VERIFICATION_KEY)
        return { verified: decoded.app };
    } catch (error) {
        return { verified: null };
    }
};

module.exports = context;

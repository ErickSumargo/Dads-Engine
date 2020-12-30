const mapper = (response) => {
    return {
        id: response.id,
        setup: response.setup,
        punchline: response.punchline
    };
};

module.exports = mapper;

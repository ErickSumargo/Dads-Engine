const mapper = (response) => {
    return {
        id: response.id,
        joke: response.joke
    };
};

module.exports = mapper;

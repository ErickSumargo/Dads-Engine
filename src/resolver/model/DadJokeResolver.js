const DadJoke = {
    snapshot: (dadJoke, _, __) => {
        return process.env.REST_API_BASE_URL + '/' + dadJoke.id + '.png'
    }
};

module.exports = DadJoke;

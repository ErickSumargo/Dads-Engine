const dadJokesResolver = require('./field/DadJokesResolver')
const randomDadJokeResolver = require('./field/RandomDadJokeResolver')

const Query = {
    dadJokes: dadJokesResolver,
    randomDadJoke: randomDadJokeResolver
};

module.exports = Query;

const response = require('../response/DadJokesResponse');

const query = `
  type Query {
    dadJokes(
      page: Int!
      term: String = ""
      limit: Int = 20
    ): DadJokesResponse!

    randomDadJoke: DadJoke!
  }
`;

module.exports = [query, response].flat();

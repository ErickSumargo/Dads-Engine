const response = require('../response/DadJokesResponse');

const query = `
  type Query {
    dadJokes(
      cursor: String
      limit: Int = 20
    ): DadJokesResponse!
  }
`;

module.exports = [query, response].flat();

const model = require('../model/DadJoke');

const response = `
  type DadJokesResponse {
    jokes: [DadJoke!]!
    cursor: String
    limit: Int!
  }
`;

module.exports = [response, model].flat();

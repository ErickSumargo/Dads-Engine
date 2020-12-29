const model = require('../model/DadJoke');

const response = `
  type DadJokesResponse {
    jokes: [DadJoke!]!
    limit: Int!
    page: Int!
    term: String!
    totalJokes: Int!
    totalPages: Int!
  }
`;

module.exports = [response, model].flat();

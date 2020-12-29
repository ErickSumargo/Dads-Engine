const dadJokeMapper = require('./DadJokeMapper');

const mapper = (response) => {
    return {
        jokes: response.results.map(result => dadJokeMapper(result)),
        limit: response.limit,
        page: response.current_page,
        term: response.search_term,
        totalJokes: response.total_jokes,
        totalPages: response.total_pages
    };
};

module.exports = mapper;

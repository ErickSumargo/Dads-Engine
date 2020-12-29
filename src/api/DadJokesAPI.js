const BaseAPI = require('./BaseAPI');

class DadJokesAPI extends BaseAPI {

    async fetchDadJokes(page, limit, term) {
        const response = await this.get(
            'search',
            {
                page: page,
                limit: limit,
                term: term
            },
            {
                cacheOptions: { ttl: 60 }
            }
        );
        return response;
    }

    async fetchRandomDadJoke() {
        const response = await this.get('');
        return response;
    }
}

module.exports = DadJokesAPI;

const { RESTDataSource } = require('apollo-datasource-rest');

class BaseAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.REST_API_BASE_URL;
    }

    willSendRequest(request) {
        request.headers.set('Accept', 'application/json');
    }
}

module.exports = BaseAPI

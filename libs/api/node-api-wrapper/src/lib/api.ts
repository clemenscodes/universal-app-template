import * as models from '@models';

class Api {
    static request(): models.Request {
        const req = {
            field: 'hello',
            value: 'world',
        };
        return req;
    }
}

export default Api;

const {getFullMethodName} = require("./api-utils");

class Api {

    apiBaseName;
    client;

    constructor(clientRpc) {
        this.client = clientRpc;
        this.apiBaseName = undefined;
    }

    /**
     * @protected
     */
    _call(method, params = []) {
        return new Promise((resolve, reject) => {
            const fullMethodName = getFullMethodName(this.apiBaseName, method);
            this.client.methodCall(fullMethodName, params, (error, value) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(value);
                }
            })
        });
    }
}

module.exports = Api;
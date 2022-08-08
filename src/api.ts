import {Client} from "xmlrpc";

const {getFullMethodName} = require("./api-utils");

export default class Api {

    apiBaseName: string | undefined;
    client: Client;

    constructor(clientRpc: Client) {
        this.client = clientRpc;
    }

    /**
     * @protected
     */
    protected call(method: string, params = []) {
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
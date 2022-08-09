import {Client} from "xmlrpc";

const {getFullMethodName} = require("./api-utils");

export default class Api {

    protected basename: string | undefined;
    protected client: Client;

    constructor(clientRpc: Client) {
        this.client = clientRpc;
    }

    protected call(method: string, params: any = []): Promise<any> {
        return new Promise((resolve, reject) => {
            const fullMethodName = getFullMethodName(this.basename, method);
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
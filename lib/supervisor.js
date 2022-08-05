const xmlrpc = require('xmlrpc');
const SystemApi = require("./system.js");

/**
 *
 */
class SupervisorApi {
    /**
     *
     * @param clientRpc {xmlrpc.Client}
     */
    constructor(clientRpc) {
        this.client = clientRpc;
    }

    createSystemApi() {
        return new SystemApi(this.client);
    }

}


exports = module.exports = SupervisorApi;
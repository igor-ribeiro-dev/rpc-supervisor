const xmlrpc = require('xmlrpc');
const SupervisorApi = require("./supervisor.js");

/**
 *
 */
class SystemApi {
    /**
     *
     * @param clientRpc {xmlrpc.Client}
     */
    constructor(clientRpc) {
        this.client = clientRpc;
    }

    createSupervisorApi() {
        return new SupervisorApi(this.client);
    }
    
}


exports = module.exports = SystemApi;
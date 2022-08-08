const SupervisorApi = require("./supervisor.js");
const Api = require("./api");

/**
 *
 */
class SystemApi extends Api {

    apiBaseName = 'system'

    createSupervisorApi() {
        return new SupervisorApi(this.client);
    }

    /**
     *
     * @returns {Promise<string[]>}
     */
    async listMethods() {
        return this._call('listMethods');
    }

    methodHelp() {}
    methodSignature() {}
    multicall() {}
}


exports = module.exports = SystemApi;
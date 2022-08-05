const SystemApi = require("./system.js");
const Api = require("./api");

/**
 *
 */
class SupervisorApi extends Api {

    apiBaseName = 'supervisor'

    createSystemApi() {
        return new SystemApi(this.client);
    }

}


exports = module.exports = SupervisorApi;
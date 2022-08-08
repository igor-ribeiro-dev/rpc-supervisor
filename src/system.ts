import SupervisorApi from "./supervisor.js";
import Api from "./api";

export default class SystemApi extends Api {

    apiBaseName = 'system'

    createSupervisorApi() {
        return new SupervisorApi(this.client);
    }

    /**
     *
     * @returns {Promise<string[]>}
     */
    async listMethods() {
        return this.call('listMethods');
    }

    methodHelp() {}
    methodSignature() {}
    multicall() {}
}
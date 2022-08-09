import SupervisorApi from "./supervisor.js";
import Api from "./api";

export default class SystemApi extends Api {

    apiBaseName = 'system'

    createSupervisorApi() {
        return new SupervisorApi(this.client);
    }

    /**
     * Return an array listing the available method names
     *
     * @returns {Promise<string[]>}
     */
    async listMethods() {
        return this.call('listMethods');
    }

    async methodHelp(name: string): Promise<string> {
        return this.call('methodHelp', [name]);
    }
    methodSignature() {}
    multicall() {}
}
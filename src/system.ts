import SupervisorApi from "./supervisor.js";
import Api from "./api";

export default class SystemApi extends Api {

    basename = 'system'

    createSupervisorApi() {
        return new SupervisorApi(this.client);
    }

    async listMethods() {
        return this.call('listMethods');
    }

    async methodHelp(name: string): Promise<string> {
        return this.call('methodHelp', [name]);
    }

    async methodSignature(name: string): Promise<string[]> {
        return this.call('methodSignature', [name]);
    }
}
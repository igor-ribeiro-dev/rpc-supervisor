import SystemApi from './system.js';
import Api from './api';

export default class SupervisorApi extends Api {

    apiBaseName = 'supervisor'

    createSystemApi() {
        return new SystemApi(this.client);
    }

}
import SystemApi from './system.js';
import Api from './api';

export default class SupervisorApi extends Api {

    basename = 'supervisor'

    createSystemApi() {
        return new SystemApi(this.client);
    }

}
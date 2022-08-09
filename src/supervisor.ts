import SystemApi from './system.js';
import Api from './api';

export default class SupervisorApi extends Api {

    basename = 'supervisor'

    createSystemApi() {
        return new SystemApi(this.client);
    }


    addProcessGroup() {
    }

    clearAllProcessLogs() {
    }

    clearLog() {
    }

    clearProcessLog() {
    }

    clearProcessLogs() {
    }

    getAPIVersion(): Promise<string> {
        return this.call('getAPIVersion');
    }

    getAllConfigInfo() {
    }

    getAllProcessInfo() {
    }

    getIdentification() {
    }

    getPID() {
    }

    getProcessInfo() {
    }

    getState() {
    }

    getSupervisorVersion() {
    }

    getVersion() {
    }

    readLog() {
    }

    readMainLog() {
    }

    readProcessLog() {
    }

    readProcessStderrLog() {
    }

    readProcessStdoutLog() {
    }

    reloadConfig() {
    }

    removeProcessGroup() {
    }

    restart() {
    }

    sendProcessStdin() {
    }

    sendRemoteCommEvent() {
    }

    shutdown() {
    }

    signalAllProcesses() {
    }

    signalProcess() {
    }

    signalProcessGroup() {
    }

    startAllProcesses() {
    }

    startProcess() {
    }

    startProcessGroup() {
    }

    stopAllProcesses() {
    }

    stopProcess() {
    }

    stopProcessGroup() {
    }

    tailProcessLog() {
    }

    tailProcessStderrLog() {
    }

    tailProcessStdoutLog() {
    }

}
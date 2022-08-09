import SystemApi from './system.js';
import Api from './api';
import {ProcessInfo} from "./types";

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

    getProcessInfo(name: string): Promise<ProcessInfo> {
        return this.call('getProcessInfo', [name]);
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
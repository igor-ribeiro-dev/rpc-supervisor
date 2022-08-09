import SystemApi from './system.js';
import Api from './api';
import {ProcessInfo, SupervisorState} from "./types";

export default class SupervisorApi extends Api {

    basename = 'supervisor'

    createSystemApi() {
        return new SystemApi(this.client);
    }


    addProcessGroup() {
    }

    clearAllProcessLogs() {
    }

    clearLog(): Promise<boolean> {
        return this.call('clearLog');
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

    getIdentification(): Promise<string> {
        return this.call('getIdentification');
    }

    getPID(): Promise<number> {
        return this.call('getPID');
    }

    getProcessInfo(name: string): Promise<ProcessInfo> {
        return this.call('getProcessInfo', [name]);
    }

    getState(): Promise<SupervisorState> {
        return this.call('getState');
    }

    getSupervisorVersion(): Promise<string> {
        return this.call('getSupervisorVersion');
    }

    getVersion() {
    }

    readLog(offset: number, length: number): Promise<string> {
        return this.call('readLog', [offset, length])
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

    restart(): Promise<boolean> {
        return this.call('restart');
    }

    sendProcessStdin() {
    }

    sendRemoteCommEvent() {
    }

    shutdown(): Promise<boolean> {
        return this.call('shutdown');
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
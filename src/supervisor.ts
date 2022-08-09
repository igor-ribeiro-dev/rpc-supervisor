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

    clearAllProcessLogs(): Promise<ProcessInfo[]> {
        return this.call('clearAllProcessLogs');
    }

    clearLog(): Promise<boolean> {
        return this.call('clearLog');
    }

    clearProcessLog() {
    }

    clearProcessLogs(): Promise<boolean> {
        return this.call('clearProcessLogs');
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

    readMainLog(name: string, offset: number, length: number): Promise<string> {
        return this.call('readMainLog', [name, offset, length]);
    }

    readProcessLog(name: string, offset: number, length: number): Promise<string> {
        return this.call('readProcessLog', [name, offset, length]);
    }

    readProcessStderrLog(name: string, offset: number, length: number): Promise<string> {
        return this.call('readProcessStderrLog', [name, offset, length]);
    }

    readProcessStdoutLog(name: string, offset: number, length: number): Promise<string> {
        return this.call('readProcessStdoutLog', [name, offset, length]);
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

    tailProcessLog(name: string, offset: number, length: number): Promise<string> {
        return this.call('tailProcessLog', [name, offset, length]);
    }

    tailProcessStderrLog(name: string, offset: number, length: number): Promise<string> {
        return this.call('tailProcessStderrLog', [name, offset, length]);
    }

    tailProcessStdoutLog(name: string, offset: number, length: number): Promise<string> {
        return this.call('tailProcessStdoutLog', [name, offset, length]);
    }

}
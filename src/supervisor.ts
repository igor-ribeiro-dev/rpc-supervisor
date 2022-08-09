import SystemApi from './system.js';
import Api from './api';
import {ConfigInfo, ProcessInfo, Signal, SupervisorState} from "./types";

export default class SupervisorApi extends Api {

    basename = 'supervisor'

    createSystemApi() {
        return new SystemApi(this.client);
    }

    async addProcessGroup(name: string): Promise<boolean> {
        return this.call('addProcessGroup', [name]);
    }

    async clearAllProcessLogs(): Promise<ProcessInfo[]> {
        return this.call('clearAllProcessLogs');
    }

    async clearLog(): Promise<boolean> {
        return this.call('clearLog');
    }

    async clearProcessLog(name: string): Promise<true> {
        return this.call('clearProcessLog', [name]);
    }

    async clearProcessLogs(): Promise<boolean> {
        return this.call('clearProcessLogs');
    }

    async getAPIVersion(): Promise<string> {
        return this.call('getAPIVersion');
    }

    async getAllConfigInfo(): Promise<ConfigInfo[]> {
        return this.call('getAllConfigInfo');
    }

    async getAllProcessInfo(): Promise<ProcessInfo[]> {
        return this.call('getAllProcessInfo');
    }

    async getIdentification(): Promise<string> {
        return this.call('getIdentification');
    }

    async getPID(): Promise<number> {
        return this.call('getPID');
    }

    async getProcessInfo(name: string): Promise<ProcessInfo> {
        return this.call('getProcessInfo', [name]);
    }

    async getState(): Promise<SupervisorState> {
        return this.call('getState');
    }

    async getSupervisorVersion(): Promise<string> {
        return this.call('getSupervisorVersion');
    }

    /**
     * @deprecated
     */
    async getVersion(): Promise<string> {
        return this.call('getVersion');
    }

    async readLog(offset: number, length: number): Promise<string> {
        return this.call('readLog', [offset, length])
    }

    async readMainLog(name: string, offset: number, length: number): Promise<string> {
        return this.call('readMainLog', [name, offset, length]);
    }

    async readProcessLog(name: string, offset: number, length: number): Promise<string> {
        return this.call('readProcessLog', [name, offset, length]);
    }

    async readProcessStderrLog(name: string, offset: number, length: number): Promise<string> {
        return this.call('readProcessStderrLog', [name, offset, length]);
    }

    async readProcessStdoutLog(name: string, offset: number, length: number): Promise<string> {
        return this.call('readProcessStdoutLog', [name, offset, length]);
    }

    async reloadConfig(): Promise<Array<string[]>> {
        return this.call('reloadConfig');
    }

    async removeProcessGroup(name: string): Promise<boolean> {
        return this.call('removeProcessGroup', [name]);
    }

    async restart(): Promise<boolean> {
        return this.call('restart');
    }

    async sendProcessStdin(name: string, chars: string): Promise<true> {
        return this.call('sendProcessStdin', [name, chars]);
    }

    async sendRemoteCommEvent(type: string, data: string): Promise<true> {
        return this.call('sendRemoteCommEvent', [type, data]);
    }

    async shutdown(): Promise<boolean> {
        return this.call('shutdown');
    }

    async signalAllProcesses(signals: Signal): Promise<ProcessInfo[]> {
        return this.call('signalAllProcesses', [signals]);
    }

    async signalProcess(name: string, signal: Signal): Promise<boolean> {
        return this.call('signalProcess', [name, signal]);
    }

    async signalProcessGroup(name: string, signal: Signal): Promise<boolean[]> {
        return this.call('signalProcessGroup', [name, signal]);
    }

    async startAllProcesses(wait: boolean = true): Promise<ProcessInfo> {
        return this.call('startAllProcesses', [wait]);
    }

    async startProcess(name: string, wait: boolean = true): Promise<boolean> {
        return this.call('startProcess', [name, wait]);
    }

    async startProcessGroup(name: string, wait: boolean = true): Promise<ProcessInfo> {
        return this.call('startProcessGroup', [name, wait]);
    }

    async stopAllProcesses(wait: boolean = true): Promise<ProcessInfo> {
        return this.call('stopAllProcesses', [wait]);
    }

    async stopProcess(name: string, wait: boolean = true): Promise<boolean> {
        return this.call('stopProcess', [name, wait]);
    }

    async stopProcessGroup(name: string, wait: boolean = true) {
        return this.call('stopProcessGroup', [name, wait]);
    }

    async tailProcessLog(name: string, offset: number, length: number): Promise<string> {
        return this.call('tailProcessLog', [name, offset, length]);
    }

    async tailProcessStderrLog(name: string, offset: number, length: number): Promise<string> {
        return this.call('tailProcessStderrLog', [name, offset, length]);
    }

    async tailProcessStdoutLog(name: string, offset: number, length: number): Promise<string> {
        return this.call('tailProcessStdoutLog', [name, offset, length]);
    }
}
import SystemApi from './system.js';
import Api from './api';
import {ProcessInfo, SupervisorState} from "./types";

export default class SupervisorApi extends Api {

    basename = 'supervisor'

    createSystemApi() {
        return new SystemApi(this.client);
    }


    async addProcessGroup() {
    }

    async clearAllProcessLogs(): Promise<ProcessInfo[]> {
        return this.call('clearAllProcessLogs');
    }

    async clearLog(): Promise<boolean> {
        return this.call('clearLog');
    }

    async clearProcessLog() {
    }

    async clearProcessLogs(): Promise<boolean> {
        return this.call('clearProcessLogs');
    }

    async getAPIVersion(): Promise<string> {
        return this.call('getAPIVersion');
    }

    async getAllConfigInfo() {
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

    async getVersion() {
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

    async reloadConfig() {
    }

    async removeProcessGroup() {
    }

    async restart(): Promise<boolean> {
        return this.call('restart');
    }

    async sendProcessStdin() {
    }

    async sendRemoteCommEvent() {
    }

    async shutdown(): Promise<boolean> {
        return this.call('shutdown');
    }

    async signalAllProcesses() {
    }

    async signalProcess() {
    }

    async signalProcessGroup() {
    }

    async startAllProcesses() {
    }

    async startProcess(name: string, wait: boolean = true): Promise<boolean> {
        return this.call('startProcess', [name, wait]);
    }

    async startProcessGroup() {
    }

    async stopAllProcesses() {
    }

    async stopProcess() {
    }

    async stopProcessGroup() {
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
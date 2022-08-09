export type ClientOptions = {
    host: string,
    port: string,
    path: string,
    username: string,
    password: string,
}

export type ProcessInfo = {
    name: string,
    group: string,
    start: number,
    stop: number,
    now: number,
    state: ProcessInfoStates,
    statename: ProcessInfoStateNames,
    spawnerr: '',
    exitstatus: number,
    logfile: string
    stdout_logfile: string
    stderr_logfile: string
    pid: number,
    description: string
}

export type SupervisorState = {
    statecode: StateCode,
    statename: StateName,
}

// Enums

export enum ProcessInfoStateNames {
    Stopped = 'STOPPED',
    Starting = 'STARTING',
    Running = 'RUNNING',
    Backoff = 'BACKOFF',
    Stopping = 'STOPPING',
    Exited = 'EXITED',
    Fatal = 'FATAL',
    Unknown = 'UNKNOWN',
}

export enum ProcessInfoStates {
    Stopped = 0,
    Starting = 10,
    Running = 20,
    Backoff = 30,
    Stopping = 40,
    Exited = 100,
    Fatal = 200,
    Unknown = 1000,
}

export enum StateCode {
    Fatal = 2,
    Running = 1,
    Restarting = 0,
    Shutdown = -1,
}

export enum StateName {
    Fatal = 'FATAL',
    Running = 'RUNNING',
    Restarting = 'RESTARTING',
    Shutdown = 'SHUTDOWN',
}
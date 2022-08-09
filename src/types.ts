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

// Enums

export enum ProcessInfoStateNames {
    Stopped = 'STOPPED', // (0)
    Starting = 'STARTING', // (10)
    Running = 'RUNNING', // (20)
    Backoff = 'BACKOFF', // (30)
    Stopping = 'STOPPING', // (40)
    Exited = 'EXITED', // (100)
    Fatal = 'FATAL', // (200)
    Unknown = 'UNKNOWN', // (1000)
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
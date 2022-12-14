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

export type ConfigInfo = {
    autostart: boolean,
    command: string,
    exitcodes: number[],
    group: string,
    group_prio: number,
    inuse: boolean,
    killasgroup: boolean,
    name: string,
    process_prio: number,
    redirect_stderr: boolean,
    startretries: number,
    startsecs: number,
    stdout_capture_maxbytes: number,
    stdout_events_enabled: boolean,
    stdout_logfile: string,
    stdout_logfile_backups: number,
    stdout_logfile_maxbytes: number,
    stdout_syslog: boolean,
    stopsignal: number,
    stopwaitsecs: number,
    stderr_capture_maxbytes: number,
    stderr_events_enabled: boolean,
    stderr_logfile: string,
    stderr_logfile_backups: number,
    stderr_logfile_maxbytes: number,
    stderr_syslog: boolean
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

export enum Signal {
    One = '1',
    Hup = 'HUP',
}
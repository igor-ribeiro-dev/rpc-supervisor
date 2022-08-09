import SupervisorApi from "./supervisor.js";
import SystemApi from "./system.js";
import {makeRpcClient} from "./api-utils.js";
import {ClientOptions} from "./types";

export function createSupervisorApi (options: ClientOptions) {
    return new SupervisorApi(makeRpcClient(options));
}

export function createSystemApi(options: ClientOptions) {
    return new SystemApi(makeRpcClient(options));
}
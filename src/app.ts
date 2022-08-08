import SupervisorApi from "./supervisor.js";
import SystemApi from "./system.js";
import {makeRpcClient} from "./api-utils.js";
import {ClientOptions} from "./types";

/**
 *
 * @param options.host
 * @param options.port
 * @param options.path
 * @param options.username
 * @param options.password
 * @returns {SupervisorApi}
 */
export function createSupervisorApi (options: ClientOptions) {
    return new SupervisorApi(makeRpcClient(options));
}

/**
 *
 * @param options.host
 * @param options.port
 * @param options.path
 * @param options.username
 * @param options.password
 * @returns {SystemApi}
 */
export function createSystemApi(options: ClientOptions) {
    return new SystemApi(makeRpcClient(options));
}
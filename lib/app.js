const SupervisorApi = require("./supervisor.js");
const SystemApi = require("./system.js");
const {makeRpcClient} = require("./api-utils.js");

const app = exports = module.exports = {};

/**
 *
 * @param options.host
 * @param options.port
 * @param options.path
 * @param options.username
 * @param options.password
 * @returns {SupervisorApi}
 */
app.createSupervisorApi = function (options) {
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
app.createSystemApi = function (options) {
    return new SystemApi(makeRpcClient(options));
}
const xmlrpc = require('xmlrpc');
const SupervisorApi = require("./supervisor.js");
const SystemApi = require("./system.js");

const app = exports = module.exports = {};

function makeRpcClient(options) {

    options = options || {};

    if (!options.host) {
        throw new Error('Host for Supervisor is invalid.');
    }

    if (!options.port) {
        throw new Error('Port for Supervisor is invalid.');
    }

    const clientOptions = {
        host: options.host,
        path: options.path,
        port: options.port,
    };

    if (options.username && options.password) {
        clientOptions.basic_auth = {
            user: options.username,
            pass: options.password,
        }
    }

    return xmlrpc.createClient(clientOptions);
}

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
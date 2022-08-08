const xmlrpc = require("xmlrpc");
module.exports.getFullMethodName = function (baseName, method) {
    return [baseName, method].join('.');
}

module.exports.makeRpcClient = function (options) {

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
import xmlrpc, {Client} from 'xmlrpc';
import {ClientOptions} from "./types";

export function getFullMethodName(baseName: string, method: string) {
    return [baseName, method].join('.');
}

export function makeRpcClient(options: ClientOptions): Client {

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
        Object.assign(clientOptions, clientOptions, {
            basic_auth: {
                user: options.username,
                pass: options.password,
            }
        })
    }

    // @ts-ignore
    return xmlrpc.createClient(clientOptions);
}
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const system_js_1 = __importDefault(require("./system.js"));
const api_1 = __importDefault(require("./api"));
class SupervisorApi extends api_1.default {
    constructor() {
        super(...arguments);
        this.apiBaseName = 'supervisor';
    }
    createSystemApi() {
        return new system_js_1.default(this.client);
    }
}
exports.default = SupervisorApi;
//# sourceMappingURL=supervisor.js.map
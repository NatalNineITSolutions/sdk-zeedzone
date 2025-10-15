"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Workforces {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    addWorkForces(data) {
        return this.axiosClient.request("post", "/workforces", data);
    }
    getAllWorkForces() {
        return this.axiosClient.request("get", "/workforces");
    }
    getWorkForceById(id) {
        return this.axiosClient.request("get", `/workforces/${id}`);
    }
    updateWorkForces(id, data) {
        return this.axiosClient.request("put", `/workforces/${id}`, data);
    }
    deleteWorkForces(id) {
        return this.axiosClient.request("delete", `/workforces/${id}`);
    }
}
exports.default = Workforces;
//# sourceMappingURL=WorkForces.js.map
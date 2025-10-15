"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estimates {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getAllEstimates() {
        return this.axiosClient.request("get", `/estimate`);
    }
    addEstimates(data) {
        return this.axiosClient.request("post", `/estimate`, data);
    }
    getEstimatesById(id) {
        return this.axiosClient.request("get", `/estimate/${id}`);
    }
    editEstimates(id, data) {
        return this.axiosClient.request("put", `/estimate/${id}`, data);
    }
    deleteEstimates(id) {
        return this.axiosClient.request("delete", `/estimate/${id}`);
    }
}
exports.default = Estimates;
//# sourceMappingURL=Estimates.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CostCodes {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    addCostCode(data) {
        return this.axiosClient.request("psot", "/cost-codes", data);
    }
    updateCostCode(id, data) {
        return this.axiosClient.request("put", `/cost-codes/${id}`, data);
    }
    deleteCostCode(id) {
        return this.axiosClient.request("delete", `/cost-codes/${id}`);
    }
    getCostCode() {
        return this.axiosClient.request("get", `/cost-codes`);
    }
}
exports.default = CostCodes;
//# sourceMappingURL=CostCode.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubCostCodes {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    addSubCostCode(data) {
        return this.axiosClient.request("post", "/sub-cost-codes", data);
    }
    updateSubCostCode(id, data) {
        return this.axiosClient.request("put", `/sub-cost-codes/${id}`, data);
    }
    deleteSubCostCode(id) {
        return this.axiosClient.request("delete", `/sub-cost-codes/${id}`);
    }
    getSubCostCode() {
        return this.axiosClient.request("get", `/sub-cost-codes`);
    }
}
exports.default = SubCostCodes;
//# sourceMappingURL=SubCostCode.js.map
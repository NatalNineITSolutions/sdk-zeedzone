"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contracts {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getAllContractType() {
        return this.axiosClient.request("get", "/contract-type");
    }
    getContractTypeById(id) {
        return this.axiosClient.request("get", `/contract-type/${id}`);
    }
    addContractType(data) {
        return this.axiosClient.request("post", "/contract-type", data);
    }
    EditContractType(id, data) {
        return this.axiosClient.request("put", `/contract-type/${id}`, data);
    }
    deleteContractType(id) {
        return this.axiosClient.request("delete", `/contract-type/${id}`);
    }
}
exports.default = Contracts;
//# sourceMappingURL=Contract.js.map
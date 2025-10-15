"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Materials {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    addMaterials(data) {
        return this.axiosClient.request("post", "/materials", data);
    }
    getAllMaterials() {
        return this.axiosClient.request("get", "/materials");
    }
    getMaterialById(id) {
        return this.axiosClient.request("get", `/materials/${id}`);
    }
    updateMaterials(id, data) {
        return this.axiosClient.request("put", `/materials/${id}`, data);
    }
    deleteMaterials(id) {
        return this.axiosClient.request("delete", `/materials/${id}`);
    }
}
exports.default = Materials;
//# sourceMappingURL=Materials.js.map
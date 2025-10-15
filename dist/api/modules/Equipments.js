"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Equipments {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    addEquipments(data) {
        return this.axiosClient.request("post", "/equipments", data);
    }
    getAllEquipments() {
        return this.axiosClient.request("get", "/equipments");
    }
    getEquipmentById(id) {
        return this.axiosClient.request("get", `/equipments/${id}`);
    }
    updateEquipment(id, data) {
        return this.axiosClient.request("put", `/equipments/${id}`, data);
    }
    deleteEquipment(id) {
        return this.axiosClient.request("delete", `/equipments/${id}`);
    }
}
exports.default = Equipments;
//# sourceMappingURL=Equipments.js.map
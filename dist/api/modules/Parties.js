"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parties {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    addParty(data) {
        return this.axiosClient.request("post", "/parties", data);
    }
    getAllParties() {
        return this.axiosClient.request("get", "/parties");
    }
    getPartyById(id) {
        return this.axiosClient.request("get", `/parties/${id}`);
    }
    updateParties(id, data) {
        return this.axiosClient.request("put", `/parties/${id}`, data);
    }
    deleteParties(id) {
        return this.axiosClient.request("delete", `/parties/${id}`);
    }
}
exports.default = Parties;
//# sourceMappingURL=Parties.js.map
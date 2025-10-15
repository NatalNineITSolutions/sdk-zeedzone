"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clients {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getClients() {
        return this.axiosClient.request("get", "/client");
    }
    getClientByID(id) {
        return this.axiosClient.request("get", `/client/${id}`);
    }
    addClient(data) {
        return this.axiosClient.request("post", "/client", data);
    }
    updateClient(id, data) {
        return this.axiosClient.request("put", `/client/${id}`, data);
    }
    deleteClient(id) {
        return this.axiosClient.request("delete", `/client/${id}`);
    }
}
exports.default = Clients;
//# sourceMappingURL=Client.js.map
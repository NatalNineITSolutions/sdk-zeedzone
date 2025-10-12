"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = __importDefault(require("./axiosInstance"));
class ZeedOneAPI {
    constructor(ApiKey) {
        this.axiosClient = new axiosInstance_1.default(ApiKey);
    }
    // ---------------- AUTH ----------------
    login(email, password) {
        return this.axiosClient.request("post", "/auth/login", { email, password });
    }
    refresh() {
        return this.axiosClient.request("post", "/auth/refresh");
    }
    logout() {
        return this.axiosClient.request("post", "/auth/logout");
    }
    // ---------------- COMPANY ----------------
    getCompany() {
        return this.axiosClient.request("get", "/company");
    }
    // ---------------- LEAD ----------------
    getLeads() {
        return this.axiosClient.request("get", "/lead");
    }
    getLeadByID(id) {
        return this.axiosClient.request("get", `/lead/${id}`);
    }
    addLead(data) {
        return this.axiosClient.request("post", "/lead", data);
    }
    updateLead(id, data) {
        return this.axiosClient.request("put", `/lead/${id}`, data);
    }
    deleteLead(id) {
        return this.axiosClient.request("delete", `/lead/${id}`);
    }
    getLeadSource() {
        return this.axiosClient.request("get", "/lead-source");
    }
    getLeadCustomFields() {
        return this.axiosClient.request("get", "/lead-customfields");
    }
    getLeadDetails() {
        return this.axiosClient.request("get", "/lead-details");
    }
    getLeadDetailsById(id) {
        return this.axiosClient.request("get", `/lead-details/${id}`);
    }
    // ---------------- CLIENT ----------------
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
exports.default = ZeedOneAPI;
//# sourceMappingURL=zeedzone.js.map
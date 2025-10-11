"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
require("dotenv/config");
class ZeedOne {
    constructor(ApiKey) {
        this.client = axios_1.default.create({
            baseURL:'http://zeedone.test',
            headers: { Authorization: `Bearer ${ApiKey}` },
        });
    }
    async request(method, url, data) {
        return (await this.client.request({ method, url, data })).data;
    }
    login(email, password) {
        return this.request("post", "/api/v1/auth/login", { email, password });
    }
    refresh() {
        return this.request("post", "/refresh");
    }
    logout() {
        return this.request("post", "/logout");
    }
    getCompany() {
        return this.request("get", "/company");
    }
    getLead() {
        return this.request("get", '/lead');
    }
    getLeadByID(id) {
        return this.request("get", `/lead/${id}`);
    }
    addLead(data) {
        return this.request("post", '/lead', data);
    }
    updateLead(id, data) {
        return this.request("put", `/lead/${id}`, data);
    }
    deleteLead(id) {
        return this.request("delete", `/lead/${id}`);
    }
    getLeadSource() {
        return this.request("get", `/lead-source`);
    }
    getLeadCustomFields() {
        return this.request("get", `/lead-customfields`);
    }
    //    client  API
    getclient() {
        return this.request("get", '/client');
    }
    getClientByID(id) {
        return this.request("get", `/client/${id}`);
    }
    addClient(data) {
        return this.request("post", '/client', data);
    }
    updateClient(id, data) {
        return this.request("put", `/client/${id}`, data);
    }
    deleteClient(id) {
        return this.request("delete", `/client/${id}`);
    }
    getLeadDetails() {
        return this.request("get", `/lead-details`);
    }
    getLeadDetailsById(id) {
        return this.request("get", `/lead-details/${id}`);
    }
}
exports.default = ZeedOne;
//# sourceMappingURL=zeedzone.js.map
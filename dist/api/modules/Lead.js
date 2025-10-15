"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Leads {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
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
}
exports.default = Leads;
//# sourceMappingURL=Lead.js.map
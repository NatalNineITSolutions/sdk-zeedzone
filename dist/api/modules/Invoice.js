"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Invoices {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getAllInvoices() {
        return this.axiosClient.request("get", `/estimate`);
    }
    addInvoice(data) {
        return this.axiosClient.request("post", `/invoice`, data);
    }
    getInvoicesById(id) {
        return this.axiosClient.request("get", `/invoice/${id}`);
    }
    editInvoice(id, data) {
        return this.axiosClient.request("put", `/invoice/${id}`, data);
    }
    deleteInvoice(id) {
        return this.axiosClient.request("delete", `/invoice/${id}`);
    }
}
exports.default = Invoices;
//# sourceMappingURL=Invoice.js.map
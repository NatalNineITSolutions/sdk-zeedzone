"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Departments {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getAllDeparment() {
        return this.axiosClient.request('get', '/department');
    }
    getDeparmentByID(id) {
        return this.axiosClient.request('get', `/department/${id}`);
    }
    addDeparment(data) {
        return this.axiosClient.request('post', `/department`, data);
    }
    deleteDeparment(id) {
        return this.axiosClient.request('delete', `/department/${id}`);
    }
    editDeparment(id, data) {
        return this.axiosClient.request('put', `/department/${id}`, data);
    }
}
exports.default = Departments;
//# sourceMappingURL=Department.js.map
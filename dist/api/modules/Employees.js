"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employees {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getAllEmployees() {
        return this.axiosClient.request('get', '/employee');
    }
    getEmplyoeesByID(id) {
        return this.axiosClient.request('get', `/employee/${id}`);
    }
    addEmployee(data) {
        return this.axiosClient.request('post', `/employee`, data);
    }
    deleteEmployee(id) {
        return this.axiosClient.request('delete', `/employee/${id}`);
    }
    editEmployee(id, data) {
        return this.axiosClient.request('put', `/employee/${id}`, data);
    }
}
exports.default = Employees;
//# sourceMappingURL=Employees.js.map
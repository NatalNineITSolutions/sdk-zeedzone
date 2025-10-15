"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Desginations {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getAllDesignation() {
        return this.axiosClient.request('get', '/designation');
    }
    getDesignationByID(id) {
        return this.axiosClient.request('get', `/designation/${id}`);
    }
    addDesignation(data) {
        return this.axiosClient.request('post', `/designation`, data);
    }
    deleteDesignation(id) {
        return this.axiosClient.request('delete', `/designation/${id}`);
    }
    editDesignation(id, data) {
        return this.axiosClient.request('put', `/designation/${id}`, data);
    }
}
exports.default = Desginations;
//# sourceMappingURL=Designation.js.map
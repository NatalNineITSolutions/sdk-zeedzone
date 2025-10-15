"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Notices {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getAllNotice() {
        return this.axiosClient.request("get", `/notice`);
    }
    addNotice(data) {
        return this.axiosClient.request("post", `/notice`, data);
    }
    getNoticeById(id) {
        return this.axiosClient.request("get", `/notice/${id}`);
    }
    editNotice(id, data) {
        return this.axiosClient.request("put", `/notice/${id}`, data);
    }
    deleteNotice(id) {
        return this.axiosClient.request("delete", `/notice/${id}`);
    }
}
exports.default = Notices;
//# sourceMappingURL=Notice.js.map
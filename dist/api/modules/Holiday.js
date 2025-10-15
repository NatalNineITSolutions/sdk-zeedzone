"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Holiday {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getAllHoliday() {
        return this.axiosClient.request('get', '/holiday');
    }
    getAllHolidayById(id) {
        return this.axiosClient.request('get', `/holiday/${id}`);
    }
    addHoliday(data) {
        return this.axiosClient.request('post', `/holiday`, data);
    }
    deleteHoliday(id) {
        return this.axiosClient.request('delete', `/holiday/${id}`);
    }
    editHoliday(id, data) {
        return this.axiosClient.request('put', `/holiday/${id}`, data);
    }
}
exports.default = Holiday;
//# sourceMappingURL=Holiday.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Event {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getAllEvents() {
        return this.axiosClient.request("get", `/event`);
    }
    addEvents(data) {
        return this.axiosClient.request("post", `/event`, data);
    }
    getEventById(id) {
        return this.axiosClient.request("get", `/event/${id}`);
    }
    editEvents(id, data) {
        return this.axiosClient.request("put", `/event/${id}`, data);
    }
    deleteEvents(id) {
        return this.axiosClient.request("delete", `/event/${id}`);
    }
}
exports.default = Event;
//# sourceMappingURL=Event.js.map
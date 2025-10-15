"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tickets {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getAllTickets() {
        return this.axiosClient.request("get", "/ticket");
    }
    getAllTicketType() {
        return this.axiosClient.request("get", "/ticket-type");
    }
    getAllGroup() {
        return this.axiosClient.request("get", "/ticket-group");
    }
    getTicketMe() {
        return this.axiosClient.request("get", "/ticket/me");
    }
    getTicketUsers(id) {
        return this.axiosClient.request("get", `/ticket/user/${id}`);
    }
    getTicketReply() {
        return this.axiosClient.request("get", `/ticket/ticket-reply`);
    }
}
exports.default = Tickets;
//# sourceMappingURL=Tickets.js.map
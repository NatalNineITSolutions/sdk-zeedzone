"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Departments {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getAllOrders() {
        return this.axiosClient.request("get", `/order`);
    }
    getMyOrders() {
        return this.axiosClient.request("get", `/orders/me`);
    }
    addOrder(data) {
        return this.axiosClient.request("post", `/orders/me`, data);
    }
}
exports.default = Departments;
//# sourceMappingURL=Orders.js.map
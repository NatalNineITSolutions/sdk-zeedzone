"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Payments {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getPaymentCredentials(data) {
        return this.axiosClient.request("get", `/orders/me`, data);
    }
}
exports.default = Payments;
//# sourceMappingURL=Payment.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Auth {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    login(email, password) {
        return this.axiosClient.request("post", "/auth/login", { email, password });
    }
    refresh() {
        return this.axiosClient.request("post", "/auth/refresh");
    }
    logout() {
        return this.axiosClient.request("post", "/auth/logout");
    }
}
exports.default = Auth;
//# sourceMappingURL=Auth.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Companys {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getCompany() {
        return this.axiosClient.request("get", "/company");
    }
}
exports.default = Companys;
//# sourceMappingURL=Company.js.map
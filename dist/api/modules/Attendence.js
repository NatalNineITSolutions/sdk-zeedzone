"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Attendence {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    AttendenceClocksIn(data) {
        return this.axiosClient.request("post", `/attendance/clock-in`, data);
    }
    AttendenceClocksOut(data) {
        return this.axiosClient.request("post", `/attendance/clock-out`, data);
    }
}
exports.default = Attendence;
//# sourceMappingURL=Attendence.js.map
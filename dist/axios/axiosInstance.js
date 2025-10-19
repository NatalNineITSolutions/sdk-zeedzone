"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class AxiosClient {
    constructor(ApiKey) {
        this.client = axios_1.default.create({
            baseURL: process.env.ZEEDONE_API_BASE_URL || "http://app.zeedone.com",
            headers: { Authorization: `Bearer ${ApiKey}` },
        });
    }
    async request(method, url, data) {
        return (await this.client.request({ method, url, data })).data;
    }
    get instance() {
        return this.client;
    }
}
exports.default = AxiosClient;
//# sourceMappingURL=axiosInstance.js.map
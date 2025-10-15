"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Chats {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getAllsChats() {
        return this.axiosClient.request("get", `/userchat/user-list`);
    }
}
exports.default = Chats;
//# sourceMappingURL=Chat.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zeedzone_1 = __importDefault(require("./api/zeedzone"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // loads .env variables into process.env
exports.default = zeedzone_1.default;
//# sourceMappingURL=index.js.map
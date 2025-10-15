"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = __importDefault(require("../axios/axiosInstance"));
const Auth_1 = __importDefault(require("./modules/Auth"));
const Attendence_1 = __importDefault(require("./modules/Attendence"));
const Chat_1 = __importDefault(require("./modules/Chat"));
const Client_1 = __importDefault(require("./modules/Client"));
const Company_1 = __importDefault(require("./modules/Company"));
const Contract_1 = __importDefault(require("./modules/Contract"));
const CostCode_1 = __importDefault(require("./modules/CostCode"));
const Department_1 = __importDefault(require("./modules/Department"));
const Designation_1 = __importDefault(require("./modules/Designation"));
const Employees_1 = __importDefault(require("./modules/Employees"));
const Equipments_1 = __importDefault(require("./modules/Equipments"));
const Estimates_1 = __importDefault(require("./modules/Estimates"));
const Event_1 = __importDefault(require("./modules/Event"));
const Holiday_1 = __importDefault(require("./modules/Holiday"));
const Lead_1 = __importDefault(require("./modules/Lead"));
const Materials_1 = __importDefault(require("./modules/Materials"));
const Notice_1 = __importDefault(require("./modules/Notice"));
const Orders_1 = __importDefault(require("./modules/Orders"));
const Parties_1 = __importDefault(require("./modules/Parties"));
const Payment_1 = __importDefault(require("./modules/Payment"));
const Products_1 = __importDefault(require("./modules/Products"));
const Projects_1 = __importDefault(require("./modules/Projects"));
const SubCostCode_1 = __importDefault(require("./modules/SubCostCode"));
const Task_1 = __importDefault(require("./modules/Task"));
const Tickets_1 = __importDefault(require("./modules/Tickets"));
const WorkForces_1 = __importDefault(require("./modules/WorkForces"));
class ZeedOneAPI {
    constructor(ApiKey) {
        // Initialize axios client
        this.axiosClient = new axiosInstance_1.default(ApiKey);
        // Initialize all module APIs with axios client
        this.auth = new Auth_1.default(this.axiosClient);
        this.attendance = new Attendence_1.default(this.axiosClient);
        this.chat = new Chat_1.default(this.axiosClient);
        this.client = new Client_1.default(this.axiosClient);
        this.company = new Company_1.default(this.axiosClient);
        this.contract = new Contract_1.default(this.axiosClient);
        this.costCode = new CostCode_1.default(this.axiosClient);
        this.department = new Department_1.default(this.axiosClient);
        this.designation = new Designation_1.default(this.axiosClient);
        this.employees = new Employees_1.default(this.axiosClient);
        this.equipments = new Equipments_1.default(this.axiosClient);
        this.estimates = new Estimates_1.default(this.axiosClient);
        this.event = new Event_1.default(this.axiosClient);
        this.holiday = new Holiday_1.default(this.axiosClient);
        this.lead = new Lead_1.default(this.axiosClient);
        this.materials = new Materials_1.default(this.axiosClient);
        this.notice = new Notice_1.default(this.axiosClient);
        this.orders = new Orders_1.default(this.axiosClient);
        this.parties = new Parties_1.default(this.axiosClient);
        this.payment = new Payment_1.default(this.axiosClient);
        this.products = new Products_1.default(this.axiosClient);
        this.projects = new Projects_1.default(this.axiosClient);
        this.subCostCode = new SubCostCode_1.default(this.axiosClient);
        this.task = new Task_1.default(this.axiosClient);
        this.tickets = new Tickets_1.default(this.axiosClient);
        this.workforces = new WorkForces_1.default(this.axiosClient);
    }
}
exports.default = ZeedOneAPI;
//# sourceMappingURL=zeedzone.js.map
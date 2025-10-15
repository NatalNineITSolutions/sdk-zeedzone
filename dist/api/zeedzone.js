"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = __importDefault(require("./axiosInstance"));
class ZeedOneAPI {
    constructor(ApiKey) {
        this.axiosClient = new axiosInstance_1.default(ApiKey);
    }
    // ---------------- AUTH ----------------
    login(email, password) {
        return this.axiosClient.request("post", "/auth/login", { email, password });
    }
    refresh() {
        return this.axiosClient.request("post", "/auth/refresh");
    }
    logout() {
        return this.axiosClient.request("post", "/auth/logout");
    }
    // ---------------- COMPANY ----------------
    getCompany() {
        return this.axiosClient.request("get", "/company");
    }
    // ---------------- LEAD ----------------
    getLeads() {
        return this.axiosClient.request("get", "/lead");
    }
    getLeadByID(id) {
        return this.axiosClient.request("get", `/lead/${id}`);
    }
    addLead(data) {
        return this.axiosClient.request("post", "/lead", data);
    }
    updateLead(id, data) {
        return this.axiosClient.request("put", `/lead/${id}`, data);
    }
    deleteLead(id) {
        return this.axiosClient.request("delete", `/lead/${id}`);
    }
    getLeadSource() {
        return this.axiosClient.request("get", "/lead-source");
    }
    getLeadCustomFields() {
        return this.axiosClient.request("get", "/lead-customfields");
    }
    getLeadDetails() {
        return this.axiosClient.request("get", "/lead-details");
    }
    getLeadDetailsById(id) {
        return this.axiosClient.request("get", `/lead-details/${id}`);
    }
    // ---------------- CLIENT ----------------
    getClients() {
        return this.axiosClient.request("get", "/client");
    }
    getClientByID(id) {
        return this.axiosClient.request("get", `/client/${id}`);
    }
    addClient(data) {
        return this.axiosClient.request("post", "/client", data);
    }
    updateClient(id, data) {
        return this.axiosClient.request("put", `/client/${id}`, data);
    }
    deleteClient(id) {
        return this.axiosClient.request("delete", `/client/${id}`);
    }
    // HR---------------------------------------
    // employees
    getAllEmployees() {
        return this.axiosClient.request('get', '/employee');
    }
    getEmplyoeesByID(id) {
        return this.axiosClient.request('get', `/employee/${id}`);
    }
    addEmployee(data) {
        return this.axiosClient.request('post', `/employee`, data);
    }
    deleteEmployee(id) {
        return this.axiosClient.request('delete', `/employee/${id}`);
    }
    editEmployee(id, data) {
        return this.axiosClient.request('put', `/employee/${id}`, data);
    }
    // department
    getAllDeparment() {
        return this.axiosClient.request('get', '/department');
    }
    getDeparmentByID(id) {
        return this.axiosClient.request('get', `/department/${id}`);
    }
    addDeparment(data) {
        return this.axiosClient.request('post', `/department`, data);
    }
    deleteDeparment(id) {
        return this.axiosClient.request('delete', `/department/${id}`);
    }
    editDeparment(id, data) {
        return this.axiosClient.request('put', `/department/${id}`, data);
    }
    // designation
    getAllDesignation() {
        return this.axiosClient.request('get', '/designation');
    }
    getDesignationByID(id) {
        return this.axiosClient.request('get', `/designation/${id}`);
    }
    addDesignation(data) {
        return this.axiosClient.request('post', `/designation`, data);
    }
    deleteDesignation(id) {
        return this.axiosClient.request('delete', `/designation/${id}`);
    }
    editDesignation(id, data) {
        return this.axiosClient.request('put', `/designation/${id}`, data);
    }
    // holiday
    getAllHoliday() {
        return this.axiosClient.request('get', '/holiday');
    }
    getAllHolidayById(id) {
        return this.axiosClient.request('get', `/holiday/${id}`);
    }
    addHoliday(data) {
        return this.axiosClient.request('post', `/holiday`, data);
    }
    deleteHoliday(id) {
        return this.axiosClient.request('delete', `/holiday/${id}`);
    }
    editHoliday(id, data) {
        return this.axiosClient.request('put', `/holiday/${id}`, data);
    }
    // ------------work
    // project
    getAllProjects() {
        return this.axiosClient.request('get', '/project');
    }
    getMyProjects(id) {
        return this.axiosClient.request('get', `/project/${id}`);
    }
    getProjectsByWithQuery() {
        return this.axiosClient.request('get', `/project`);
    }
    getProjectById(id) {
        return this.axiosClient.request('get', `/project/${id}`);
    }
    getProjectTasks(projectID) {
        return this.axiosClient.request('get', `/project/${projectID}`);
    }
    addProject(data) {
        return this.axiosClient.request('post', `/project`, data);
    }
    editProject(id, data) {
        return this.axiosClient.request('put', `/project/${id}`, data);
    }
    deleteProject(id) {
        return this.axiosClient.request('delete', `/project/${id}`);
    }
    // gettasks
    getAllTasks() {
        return this.axiosClient.request('get', `/task`);
    }
    getAllSubTasksByTaskId(id) {
        return this.axiosClient.request('get', `/task/${id}/subtasks`);
    }
    getSubTasksByTaskIdAndSubTaskId(taskid, subTaskId) {
        return this.axiosClient.request('get', `/task/${taskid}/subtasks/${subTaskId}`);
    }
    addTask(data) {
        return this.axiosClient.request('post', `/task`, data);
    }
    editTask(taskID, data) {
        return this.axiosClient.request('post', `/task/${taskID}`, data);
    }
    deleteTask(taskID) {
        return this.axiosClient.request('post', `/task/${taskID}`);
    }
    // -------------Contract
    getAllContractType() {
        return this.axiosClient.request("get", "/contract-type");
    }
    getContractTypeById(id) {
        return this.axiosClient.request("get", `/contract-type/${id}`);
    }
    addContractType(data) {
        return this.axiosClient.request("post", "/contract-type", data);
    }
    EditContractType(id, data) {
        return this.axiosClient.request("put", `/contract-type/${id}`, data);
    }
    deleteContractType(id) {
        return this.axiosClient.request("delete", `/contract-type/${id}`);
    }
    // getcontract
    getAllContract() {
        return this.axiosClient.request("get", `/contract`);
    }
    addContract(data) {
        return this.axiosClient.request("post", `/contract`, data);
    }
    getContractById(id) {
        return this.axiosClient.request("get", `/contract/${id}`);
    }
    editContract(id, data) {
        return this.axiosClient.request("put", `/contract/${id}`, data);
    }
    deleteContract(id) {
        return this.axiosClient.request("delete", `/contract/${id}`);
    }
    // ----------------------Finance
    // estimate
    getAllEstimates() {
        return this.axiosClient.request("get", `/estimate`);
    }
    addEstimates(data) {
        return this.axiosClient.request("post", `/estimate`, data);
    }
    getEstimatesById(id) {
        return this.axiosClient.request("get", `/estimate/${id}`);
    }
    editEstimates(id, data) {
        return this.axiosClient.request("put", `/estimate/${id}`, data);
    }
    deleteEstimates(id) {
        return this.axiosClient.request("delete", `/estimate/${id}`);
    }
    // invoices
    getAllInvoices() {
        return this.axiosClient.request("get", `/estimate`);
    }
    addInvoice(data) {
        return this.axiosClient.request("post", `/invoice`, data);
    }
    getInvoicesById(id) {
        return this.axiosClient.request("get", `/invoice/${id}`);
    }
    editInvoice(id, data) {
        return this.axiosClient.request("put", `/invoice/${id}`, data);
    }
    deleteInvoice(id) {
        return this.axiosClient.request("delete", `/invoice/${id}`);
    }
    //-------------Notice Board
    getAllNotice() {
        return this.axiosClient.request("get", `/notice`);
    }
    addNotice(data) {
        return this.axiosClient.request("post", `/notice`, data);
    }
    getNoticeById(id) {
        return this.axiosClient.request("get", `/notice/${id}`);
    }
    editNotice(id, data) {
        return this.axiosClient.request("put", `/notice/${id}`, data);
    }
    deleteNotice(id) {
        return this.axiosClient.request("delete", `/notice/${id}`);
    }
    // events
    getAllEvents() {
        return this.axiosClient.request("get", `/event`);
    }
    addEvents(data) {
        return this.axiosClient.request("post", `/event`, data);
    }
    getEventById(id) {
        return this.axiosClient.request("get", `/event/${id}`);
    }
    editEvents(id, data) {
        return this.axiosClient.request("put", `/event/${id}`, data);
    }
    deleteEvents(id) {
        return this.axiosClient.request("delete", `/event/${id}`);
    }
    // products
    getAllProducts() {
        return this.axiosClient.request("get", `/products`);
    }
    addProducts(data) {
        return this.axiosClient.request("post", `/product`, data);
    }
    getProductById(id) {
        return this.axiosClient.request("get", `/products/${id}`);
    }
    editProducts(id, data) {
        return this.axiosClient.request("put", `/product/${id}`, data);
    }
    deleteProducts(id) {
        return this.axiosClient.request("delete", `/product/${id}`);
    }
    // ----------------Attendence 
    AttendenceClocksIn(data) {
        return this.axiosClient.request("post", `/attendance/clock-in`, data);
    }
    AttendenceClocksOut(data) {
        return this.axiosClient.request("post", `/attendance/clock-out`, data);
    }
    //----------------------- tickets
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
    // ---------Chats
    getAllsChats() {
        return this.axiosClient.request("get", `/userchat/user-list`);
    }
    // ---------Orders
    getAllOrders() {
        return this.axiosClient.request("get", `/order`);
    }
    getMyOrders() {
        return this.axiosClient.request("get", `/orders/me`);
    }
    addOrder(data) {
        return this.axiosClient.request("post", `/orders/me`, data);
    }
    // -----------Payment
    getPaymentCredentials(data) {
        return this.axiosClient.request("get", `/orders/me`, data);
    }
    // ----- Product Category
    getAllProductCategory() {
        return this.axiosClient.request("get", `/productcategory`);
    }
    getProductCategoryId(id) {
        return this.axiosClient.request("get", `/productcategory/${id}`);
    }
    //---------------------------- Construction-Module API
    // code codes
    addCostCode(data) {
        return this.axiosClient.request("psot", "/cost-codes", data);
    }
    updateCostCode(id, data) {
        return this.axiosClient.request("put", `/cost-codes/${id}`, data);
    }
    deleteCostCode(id) {
        return this.axiosClient.request("delete", `/cost-codes/${id}`);
    }
    getCostCode() {
        return this.axiosClient.request("get", `/cost-codes`);
    }
    // subcost code
    addSubCostCode(data) {
        return this.axiosClient.request("post", "/sub-cost-codes", data);
    }
    updateSubCostCode(id, data) {
        return this.axiosClient.request("put", `/sub-cost-codes/${id}`, data);
    }
    deleteSubCostCode(id) {
        return this.axiosClient.request("delete", `/sub-cost-codes/${id}`);
    }
    getSubCostCode() {
        return this.axiosClient.request("get", `/sub-cost-codes`);
    }
    // Party library
    addParty(data) {
        return this.axiosClient.request("post", "/parties", data);
    }
    getAllParties() {
        return this.axiosClient.request("get", "/parties");
    }
    getPartyById(id) {
        return this.axiosClient.request("get", `/parties/${id}`);
    }
    updateParties(id, data) {
        return this.axiosClient.request("put", `/parties/${id}`, data);
    }
    deleteParties(id) {
        return this.axiosClient.request("delete", `/parties/${id}`);
    }
    // Equipments
    addEquipments(data) {
        return this.axiosClient.request("post", "/equipments", data);
    }
    getAllEquipments() {
        return this.axiosClient.request("get", "/equipments");
    }
    getEquipmentById(id) {
        return this.axiosClient.request("get", `/equipments/${id}`);
    }
    updateEquipment(id, data) {
        return this.axiosClient.request("put", `/equipments/${id}`, data);
    }
    deleteEquipment(id) {
        return this.axiosClient.request("delete", `/equipments/${id}`);
    }
    // Workforces
    addWorkForces(data) {
        return this.axiosClient.request("post", "/workforces", data);
    }
    getAllWorkForces() {
        return this.axiosClient.request("get", "/workforces");
    }
    getWorkForceById(id) {
        return this.axiosClient.request("get", `/workforces/${id}`);
    }
    updateWorkForces(id, data) {
        return this.axiosClient.request("put", `/workforces/${id}`, data);
    }
    deleteWorkForces(id) {
        return this.axiosClient.request("delete", `/workforces/${id}`);
    }
    // materials
    addMaterials(data) {
        return this.axiosClient.request("post", "/materials", data);
    }
    getAllMaterials() {
        return this.axiosClient.request("get", "/materials");
    }
    getMaterialById(id) {
        return this.axiosClient.request("get", `/materials/${id}`);
    }
    updateMaterials(id, data) {
        return this.axiosClient.request("put", `/materials/${id}`, data);
    }
    deleteMaterials(id) {
        return this.axiosClient.request("delete", `/materials/${id}`);
    }
}
exports.default = ZeedOneAPI;
//# sourceMappingURL=zeedzone.js.map
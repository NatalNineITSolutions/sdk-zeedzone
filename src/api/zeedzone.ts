import AxiosClient from "./axiosInstance";

export default class ZeedOneAPI {
  private axiosClient: AxiosClient;

  constructor(ApiKey: string) {
    this.axiosClient = new AxiosClient(ApiKey);
  }

  // ---------------- AUTH ----------------
  login(email: string, password: string) {
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

  getLeadByID(id: number) {
    return this.axiosClient.request("get", `/lead/${id}`);
  }

  addLead(data: object) {
    return this.axiosClient.request("post", "/lead", data);
  }

  updateLead(id: number, data: object) {
    return this.axiosClient.request("put", `/lead/${id}`, data);
  }

  deleteLead(id: number) {
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

  getLeadDetailsById(id: number) {
    return this.axiosClient.request("get", `/lead-details/${id}`);
  }

  // ---------------- CLIENT ----------------
  getClients() {
    return this.axiosClient.request("get", "/client");
  }

  getClientByID(id: number) {
    return this.axiosClient.request("get", `/client/${id}`);
  }

  addClient(data: object) {
    return this.axiosClient.request("post", "/client", data);
  }

  updateClient(id: number, data: object) {
    return this.axiosClient.request("put", `/client/${id}`, data);
  }

  deleteClient(id: number) {
    return this.axiosClient.request("delete", `/client/${id}`);
  }

  // HR---------------------------------------


  // employees


  getAllEmployees() {
    return this.axiosClient.request('get', '/employee')
  }

  getEmplyoeesByID(id: number) {
    return this.axiosClient.request('get', `/employee/${id}`)
  }

  addEmployee(data: object) {
    return this.axiosClient.request('post', `/employee`, data)
  }

  deleteEmployee(id: number) {
    return this.axiosClient.request('delete', `/employee/${id}`)
  }

  editEmployee(id: number, data: object) {
    return this.axiosClient.request('put', `/employee/${id}`, data)
  }

  // department


  getAllDeparment() {
    return this.axiosClient.request('get', '/department')
  }

  getDeparmentByID(id: number) {
    return this.axiosClient.request('get', `/department/${id}`)
  }

  addDeparment(data: object) {
    return this.axiosClient.request('post', `/department`, data)
  }

  deleteDeparment(id: number) {
    return this.axiosClient.request('delete', `/department/${id}`)
  }

  editDeparment(id: number, data: object) {
    return this.axiosClient.request('put', `/department/${id}`, data)
  }


  // designation

  getAllDesignation() {
    return this.axiosClient.request('get', '/designation')
  }

  getDesignationByID(id: number) {
    return this.axiosClient.request('get', `/designation/${id}`)
  }

  addDesignation(data: object) {
    return this.axiosClient.request('post', `/designation`, data)
  }

  deleteDesignation(id: number) {
    return this.axiosClient.request('delete', `/designation/${id}`)
  }

  editDesignation(id: number, data: object) {
    return this.axiosClient.request('put', `/designation/${id}`, data)
  }


  // holiday

  getAllHoliday() {
    return this.axiosClient.request('get', '/holiday')
  }

  getAllHolidayById(id: number) {
    return this.axiosClient.request('get', `/holiday/${id}`)
  }

  addHoliday(data: object) {
    return this.axiosClient.request('post', `/holiday`, data)
  }

  deleteHoliday(id: number) {
    return this.axiosClient.request('delete', `/holiday/${id}`)
  }

  editHoliday(id: number, data: object) {
    return this.axiosClient.request('put', `/holiday/${id}`, data)
  }

  // ------------work

  // project

  getAllProjects() {
    return this.axiosClient.request('get', '/project')
  }

  getMyProjects(id: number) {
    return this.axiosClient.request('get', `/project/${id}`)
  }

  getProjectsByWithQuery() {
    return this.axiosClient.request('get', `/project`)
  }

  getProjectById(id: number) {
    return this.axiosClient.request('get', `/project/${id}`)
  }



  getProjectTasks(projectID: number) {
    return this.axiosClient.request('get', `/project/${projectID}`)
  }

  addProject(data: object) {
    return this.axiosClient.request('post', `/project`, data)
  }

  editProject(id: number, data: object) {
    return this.axiosClient.request('put', `/project/${id}`, data)
  }

  deleteProject(id: number) {
    return this.axiosClient.request('delete', `/project/${id}`)
  }


  // gettasks


  getAllTasks() {
    return this.axiosClient.request('get', `/task`)
  }

  getAllSubTasksByTaskId(id: number) {
    return this.axiosClient.request('get', `/task/${id}/subtasks`)
  }
  getSubTasksByTaskIdAndSubTaskId(taskid: number, subTaskId: number) {
    return this.axiosClient.request('get', `/task/${taskid}/subtasks/${subTaskId}`)
  }

  addTask(data: object) {
    return this.axiosClient.request('post', `/task`, data)
  }

  editTask(taskID: number, data: object) {
    return this.axiosClient.request('post', `/task/${taskID}`, data)
  }

  deleteTask(taskID: number) {
    return this.axiosClient.request('post', `/task/${taskID}`)
  }

  // -------------Contract

  getAllContractType() {
    return this.axiosClient.request("get", "/contract-type")
  }

  getContractTypeById(id: number) {
    return this.axiosClient.request("get", `/contract-type/${id}`)
  }

  addContractType(data: object) {
    return this.axiosClient.request("post", "/contract-type", data)
  }
  EditContractType(id: number, data: object) {
    return this.axiosClient.request("put", `/contract-type/${id}`, data)
  }
  deleteContractType(id: number) {
    return this.axiosClient.request("delete", `/contract-type/${id}`)
  }


  // getcontract
  getAllContract() {
    return this.axiosClient.request("get", `/contract`)
  }


  addContract(data: object) {
    return this.axiosClient.request("post", `/contract`, data)
  }


  getContractById(id: number) {
    return this.axiosClient.request("get", `/contract/${id}`)
  }

  editContract(id: number, data: object) {
    return this.axiosClient.request("put", `/contract/${id}`, data)
  }

  deleteContract(id: number) {
    return this.axiosClient.request("delete", `/contract/${id}`)
  }





  // ----------------------Finance


  // estimate

  getAllEstimates() {
    return this.axiosClient.request("get", `/estimate`)
  }


  addEstimates(data: object) {
    return this.axiosClient.request("post", `/estimate`, data)
  }


  getEstimatesById(id: number) {
    return this.axiosClient.request("get", `/estimate/${id}`)
  }

  editEstimates(id: number, data: object) {
    return this.axiosClient.request("put", `/estimate/${id}`, data)
  }

  deleteEstimates(id: number) {
    return this.axiosClient.request("delete", `/estimate/${id}`)
  }



  // invoices



  getAllInvoices() {
    return this.axiosClient.request("get", `/estimate`)
  }


  addInvoice(data: object) {
    return this.axiosClient.request("post", `/invoice`, data)
  }


  getInvoicesById(id: number) {
    return this.axiosClient.request("get", `/invoice/${id}`)
  }

  editInvoice(id: number, data: object) {
    return this.axiosClient.request("put", `/invoice/${id}`, data)
  }

  deleteInvoice(id: number) {
    return this.axiosClient.request("delete", `/invoice/${id}`)
  }



  //-------------Notice Board
  getAllNotice() {
    return this.axiosClient.request("get", `/notice`)
  }


  addNotice(data: object) {
    return this.axiosClient.request("post", `/notice`, data)
  }


  getNoticeById(id: number) {
    return this.axiosClient.request("get", `/notice/${id}`)
  }

  editNotice(id: number, data: object) {
    return this.axiosClient.request("put", `/notice/${id}`, data)
  }

  deleteNotice(id: number) {
    return this.axiosClient.request("delete", `/notice/${id}`)
  }





  // events

  getAllEvents() {
    return this.axiosClient.request("get", `/event`)
  }


  addEvents(data: object) {
    return this.axiosClient.request("post", `/event`, data)
  }


  getEventById(id: number) {
    return this.axiosClient.request("get", `/event/${id}`)
  }

  editEvents(id: number, data: object) {
    return this.axiosClient.request("put", `/event/${id}`, data)
  }

  deleteEvents(id: number) {
    return this.axiosClient.request("delete", `/event/${id}`)
  }




  // products


  getAllProducts() {
    return this.axiosClient.request("get", `/products`)
  }


  addProducts(data: object) {
    return this.axiosClient.request("post", `/product`, data)
  }


  getProductById(id: number) {
    return this.axiosClient.request("get", `/products/${id}`)
  }

  editProducts(id: number, data: object) {
    return this.axiosClient.request("put", `/product/${id}`, data)
  }

  deleteProducts(id: number) {
    return this.axiosClient.request("delete", `/product/${id}`)
  }



  // ----------------Attendence 



  AttendenceClocksIn(data: object) {
    return this.axiosClient.request("post", `/attendance/clock-in`, data)
  }


  AttendenceClocksOut(data: object) {
    return this.axiosClient.request("post", `/attendance/clock-out`, data)
  }


  //----------------------- tickets


  getAllTickets() {
    return this.axiosClient.request("get", "/ticket")
  }

  getAllTicketType() {
    return this.axiosClient.request("get", "/ticket-type")
  }

  getAllGroup() {
    return this.axiosClient.request("get", "/ticket-group")
  }

  getTicketMe() {
    return this.axiosClient.request("get", "/ticket/me")
  }

  getTicketUsers(id: number) {
    return this.axiosClient.request("get", `/ticket/user/${id}`)
  }

  getTicketReply() {
    return this.axiosClient.request("get", `/ticket/ticket-reply`)
  }

  // ---------Chats


  getAllsChats() {
    return this.axiosClient.request("get", `/userchat/user-list`)
  }



  // ---------Orders


  getAllOrders() {
    return this.axiosClient.request("get", `/order`)
  }

  getMyOrders() {
    return this.axiosClient.request("get", `/orders/me`)
  }

  addOrder(data:object){
      return this.axiosClient.request("post", `/orders/me`,data)
  }


  // -----------Payment


    getPaymentCredentials(data:object){
      return this.axiosClient.request("get", `/orders/me`,data)
  }



  // ----- Product Category


  getAllProductCategory(){
     return this.axiosClient.request("get",`/productcategory`)
  }

  getProductCategoryId(id:number){
    return this.axiosClient.request("get",`/productcategory/${id}`)
  }


  //---------------------------- Construction-Module API


  // code codes

   addCostCode(data:object) {
    return this.axiosClient.request("psot", "/cost-codes",data)
  }

  updateCostCode(id:number,data:object) {
    return this.axiosClient.request("put", `/cost-codes/${id}`,data)
  }

  deleteCostCode(id:number) {
    return this.axiosClient.request("delete", `/cost-codes/${id}`)
  }

  getCostCode() {
    return this.axiosClient.request("get", `/cost-codes`)
  }


  // subcost code


    addSubCostCode(data:object) {
    return this.axiosClient.request("post", "/sub-cost-codes",data)
  }

  updateSubCostCode(id:number,data:object) {
    return this.axiosClient.request("put", `/sub-cost-codes/${id}`,data)
  }

  deleteSubCostCode(id:number) {
    return this.axiosClient.request("delete", `/sub-cost-codes/${id}`)
  }

  getSubCostCode() {
    return this.axiosClient.request("get", `/sub-cost-codes`)
  }


  // Party library


    addParty(data:object) {
    return this.axiosClient.request("post", "/parties",data)
  }

      getParties() {
    return this.axiosClient.request("get", "/parties")
  }







































}

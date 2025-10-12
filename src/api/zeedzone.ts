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
}

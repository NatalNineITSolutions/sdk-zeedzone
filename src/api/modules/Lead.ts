import AxiosClient from "../../axios/axiosInstance";

export default class Leads {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

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


  

  

}
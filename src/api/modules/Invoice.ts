import AxiosClient from "../../axios/axiosInstance";

export default class Invoices {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

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


  

  

}


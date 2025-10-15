import AxiosClient from "../../axios/axiosInstance";

export default class Clients {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }


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
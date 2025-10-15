import AxiosClient from "../../axios/axiosInstance";

export default class Contracts {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

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

  

  

}



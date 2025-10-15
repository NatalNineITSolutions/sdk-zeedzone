import AxiosClient from "../../axios/axiosInstance";

export default class Estimates {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }
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

  

  

} 
 
 
 
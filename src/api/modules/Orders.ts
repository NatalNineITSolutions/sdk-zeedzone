import AxiosClient from "../../axios/axiosInstance";

export default class Departments {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

  
  getAllOrders() {
    return this.axiosClient.request("get", `/order`)
  }

  getMyOrders() {
    return this.axiosClient.request("get", `/orders/me`)
  }

  addOrder(data:object){
      return this.axiosClient.request("post", `/orders/me`,data)
  }


  

  

}
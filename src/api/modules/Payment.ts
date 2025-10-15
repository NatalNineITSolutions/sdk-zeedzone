import AxiosClient from "../../axios/axiosInstance";

export default class Payments {
    private axiosClient: AxiosClient;

    constructor(ApiKey: AxiosClient) {
      this.axiosClient = ApiKey;
    }
    
 getPaymentCredentials(data:object){
      return this.axiosClient.request("get", `/orders/me`,data)
  }






}





 

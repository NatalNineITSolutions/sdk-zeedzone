import AxiosClient from "../../axios/axiosInstance";

export default class Companys {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

   getCompany() {
    return this.axiosClient.request("get", "/company");
  }


  

  

}
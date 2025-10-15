
import AxiosClient from "../../axios/axiosInstance";

export default class Attendence {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
     this.axiosClient = ApiKey;
  }

   
  AttendenceClocksIn(data: object) {
    return this.axiosClient.request("post", `/attendance/clock-in`, data)
  }


  AttendenceClocksOut(data: object) {
    return this.axiosClient.request("post", `/attendance/clock-out`, data)
  }
  

  

}









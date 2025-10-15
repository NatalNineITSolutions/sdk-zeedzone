 import AxiosClient from "../../axios/axiosInstance";
 
 export default class Workforces {
   private axiosClient: AxiosClient;
 
   constructor(ApiKey: AxiosClient) {
   this.axiosClient = ApiKey;
   }
 
    addWorkForces(data:object) {
    return this.axiosClient.request("post", "/workforces",data)
  }

   getAllWorkForces() {
    return this.axiosClient.request("get", "/workforces")
  }


  getWorkForceById(id:number){
      return this.axiosClient.request("get", `/workforces/${id}`)
  }

   updateWorkForces(id:number,data:object) {
    return this.axiosClient.request("put", `/workforces/${id}`,data)
  }


  
  deleteWorkForces(id:number){
      return this.axiosClient.request("delete", `/workforces/${id}`)
  }
 
   
 
   
 
 }
 
 
 
 
 
 
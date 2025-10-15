import AxiosClient from "../../axios/axiosInstance";

export default class Parties {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

 addParty(data:object) {
    return this.axiosClient.request("post", "/parties",data)
  }

   getAllParties() {
    return this.axiosClient.request("get", "/parties")
  }


  getPartyById(id:number){
      return this.axiosClient.request("get", `/parties/${id}`)
  }

   updateParties(id:number,data:object) {
    return this.axiosClient.request("put", `/parties/${id}`,data)
  }


  
  deleteParties(id:number){
      return this.axiosClient.request("delete", `/parties/${id}`)
  }



  

  

}





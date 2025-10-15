import AxiosClient from "../../axios/axiosInstance";

export default class Equipments {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

  addEquipments(data:object) {
    return this.axiosClient.request("post", "/equipments",data)
  }

   getAllEquipments() {
    return this.axiosClient.request("get", "/equipments")
  }


  getEquipmentById(id:number){
      return this.axiosClient.request("get", `/equipments/${id}`)
  }

   updateEquipment(id:number,data:object) {
    return this.axiosClient.request("put", `/equipments/${id}`,data)
  }


  
  deleteEquipment(id:number){
      return this.axiosClient.request("delete", `/equipments/${id}`)
  }


  

  

}



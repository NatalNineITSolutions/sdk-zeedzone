import AxiosClient from "../../axios/axiosInstance";

export default class Materials {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }
addMaterials(data:object) {
    return this.axiosClient.request("post", "/materials",data)
  }

   getAllMaterials() {
    return this.axiosClient.request("get", "/materials")
  }


  getMaterialById(id:number){
      return this.axiosClient.request("get", `/materials/${id}`)
  }

   updateMaterials(id:number,data:object) {
    return this.axiosClient.request("put", `/materials/${id}`,data)
  }


  
  deleteMaterials(id:number){
      return this.axiosClient.request("delete", `/materials/${id}`)
  }

  

  

} 
 
 
 
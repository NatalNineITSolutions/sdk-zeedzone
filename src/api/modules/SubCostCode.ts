import AxiosClient from "../../axios/axiosInstance";

export default class SubCostCodes {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

    
   addSubCostCode(data:object) {
    return this.axiosClient.request("post", "/sub-cost-codes",data)
  }

  updateSubCostCode(id:number,data:object) {
    return this.axiosClient.request("put", `/sub-cost-codes/${id}`,data)
  }

  deleteSubCostCode(id:number) {
    return this.axiosClient.request("delete", `/sub-cost-codes/${id}`)
  }

  getSubCostCode() {
    return this.axiosClient.request("get", `/sub-cost-codes`)
  }

  

  

}



   
 
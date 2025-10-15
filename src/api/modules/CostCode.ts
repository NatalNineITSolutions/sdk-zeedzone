import AxiosClient from "../../axios/axiosInstance";

export default class CostCodes {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

    
 addCostCode(data:object) {
    return this.axiosClient.request("psot", "/cost-codes",data)
  }

  updateCostCode(id:number,data:object) {
    return this.axiosClient.request("put", `/cost-codes/${id}`,data)
  }

  deleteCostCode(id:number) {
    return this.axiosClient.request("delete", `/cost-codes/${id}`)
  }

  getCostCode() {
    return this.axiosClient.request("get", `/cost-codes`)
  }

  

  

}




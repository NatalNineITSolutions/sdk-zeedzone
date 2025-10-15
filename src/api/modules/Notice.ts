import AxiosClient from "../../axios/axiosInstance";

export default class Notices {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

 getAllNotice() {
    return this.axiosClient.request("get", `/notice`)
  }


  addNotice(data: object) {
    return this.axiosClient.request("post", `/notice`, data)
  }


  getNoticeById(id: number) {
    return this.axiosClient.request("get", `/notice/${id}`)
  }

  editNotice(id: number, data: object) {
    return this.axiosClient.request("put", `/notice/${id}`, data)
  }

  deleteNotice(id: number) {
    return this.axiosClient.request("delete", `/notice/${id}`)
  }

  

  

}



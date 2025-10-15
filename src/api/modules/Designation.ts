import AxiosClient from "../../axios/axiosInstance";

export default class Desginations {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

  getAllDesignation() {
    return this.axiosClient.request('get', '/designation')
  }

  getDesignationByID(id: number) {
    return this.axiosClient.request('get', `/designation/${id}`)
  }

  addDesignation(data: object) {
    return this.axiosClient.request('post', `/designation`, data)
  }

  deleteDesignation(id: number) {
    return this.axiosClient.request('delete', `/designation/${id}`)
  }

  editDesignation(id: number, data: object) {
    return this.axiosClient.request('put', `/designation/${id}`, data)
  }


  

  

}
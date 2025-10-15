import AxiosClient from "../../axios/axiosInstance";

export default class Departments {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

  getAllDeparment() {
    return this.axiosClient.request('get', '/department')
  }

  getDeparmentByID(id: number) {
    return this.axiosClient.request('get', `/department/${id}`)
  }

  addDeparment(data: object) {
    return this.axiosClient.request('post', `/department`, data)
  }

  deleteDeparment(id: number) {
    return this.axiosClient.request('delete', `/department/${id}`)
  }

  editDeparment(id: number, data: object) {
    return this.axiosClient.request('put', `/department/${id}`, data)
  }


  

  

}
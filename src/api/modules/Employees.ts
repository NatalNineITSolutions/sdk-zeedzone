import AxiosClient from "../../axios/axiosInstance";

export default class Employees {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

   getAllEmployees() {
    return this.axiosClient.request('get', '/employee')
  }

  getEmplyoeesByID(id: number) {
    return this.axiosClient.request('get', `/employee/${id}`)
  }

  addEmployee(data: object) {
    return this.axiosClient.request('post', `/employee`, data)
  }

  deleteEmployee(id: number) {
    return this.axiosClient.request('delete', `/employee/${id}`)
  }

  editEmployee(id: number, data: object) {
    return this.axiosClient.request('put', `/employee/${id}`, data)
  }

  

  

}
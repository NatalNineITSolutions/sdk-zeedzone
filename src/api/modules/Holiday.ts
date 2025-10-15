import AxiosClient from "../../axios/axiosInstance";

export default class Holiday {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

    getAllHoliday() {
    return this.axiosClient.request('get', '/holiday')
  }

  getAllHolidayById(id: number) {
    return this.axiosClient.request('get', `/holiday/${id}`)
  }

  addHoliday(data: object) {
    return this.axiosClient.request('post', `/holiday`, data)
  }

  deleteHoliday(id: number) {
    return this.axiosClient.request('delete', `/holiday/${id}`)
  }

  editHoliday(id: number, data: object) {
    return this.axiosClient.request('put', `/holiday/${id}`, data)
  }

  

  

}
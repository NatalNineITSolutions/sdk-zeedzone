import AxiosClient from "../../axios/axiosInstance";

export default class Event {
    private axiosClient: AxiosClient;

    constructor(ApiKey: AxiosClient) {
      this.axiosClient = ApiKey;
    }
    getAllEvents() {
        return this.axiosClient.request("get", `/event`)
    }


    addEvents(data: object) {
        return this.axiosClient.request("post", `/event`, data)
    }


    getEventById(id: number) {
        return this.axiosClient.request("get", `/event/${id}`)
    }

    editEvents(id: number, data: object) {
        return this.axiosClient.request("put", `/event/${id}`, data)
    }

    deleteEvents(id: number) {
        return this.axiosClient.request("delete", `/event/${id}`)
    }





}





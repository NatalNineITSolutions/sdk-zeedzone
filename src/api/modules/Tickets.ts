import AxiosClient from "../../axios/axiosInstance";

export default class Tickets {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

   getAllTickets() {
    return this.axiosClient.request("get", "/ticket")
  }

  getAllTicketType() {
    return this.axiosClient.request("get", "/ticket-type")
  }

  getAllGroup() {
    return this.axiosClient.request("get", "/ticket-group")
  }

  getTicketMe() {
    return this.axiosClient.request("get", "/ticket/me")
  }

  getTicketUsers(id: number) {
    return this.axiosClient.request("get", `/ticket/user/${id}`)
  }

  getTicketReply() {
    return this.axiosClient.request("get", `/ticket/ticket-reply`)
  }

  

  

}




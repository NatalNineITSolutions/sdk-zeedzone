import AxiosClient from "../../axios/axiosInstance";

export default class Chats {
    private axiosClient: AxiosClient;

    constructor(ApiKey: AxiosClient) {
      this.axiosClient = ApiKey;
    }


    getAllsChats() {
        return this.axiosClient.request("get", `/userchat/user-list`)
    }







}

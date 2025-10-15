import AxiosClient from "../../axios/axiosInstance";

export default class Auth {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
        this.axiosClient = ApiKey;
  }

  login(email: string, password: string) {
    return this.axiosClient.request("post", "/auth/login", { email, password });
  }

  refresh() {
    return this.axiosClient.request("post", "/auth/refresh");
  }

  logout() {
    return this.axiosClient.request("post", "/auth/logout");
  }

}
import axios, { AxiosInstance } from "axios";

export default class AxiosClient {
  private client: AxiosInstance;

  constructor(ApiKey: string) {
    this.client = axios.create({
      baseURL: process.env.BASE_URL,
      headers: { Authorization: `Bearer ${ApiKey}` },
    });
  }

  async request(method: string, url: string, data?: any) {
    return (await this.client.request({ method, url, data })).data;
  }

  get instance() {
    return this.client;
  }
}

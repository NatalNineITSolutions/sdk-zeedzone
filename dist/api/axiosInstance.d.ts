import { AxiosInstance } from "axios";
export default class AxiosClient {
    private client;
    constructor(ApiKey: string);
    request(method: string, url: string, data?: any): Promise<any>;
    get instance(): AxiosInstance;
}
//# sourceMappingURL=axiosInstance.d.ts.map
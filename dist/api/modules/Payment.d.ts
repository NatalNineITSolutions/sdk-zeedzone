import AxiosClient from "../../axios/axiosInstance";
export default class Payments {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    getPaymentCredentials(data: object): Promise<any>;
}
//# sourceMappingURL=Payment.d.ts.map
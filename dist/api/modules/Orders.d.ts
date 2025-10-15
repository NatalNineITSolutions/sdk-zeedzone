import AxiosClient from "../../axios/axiosInstance";
export default class Departments {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    getAllOrders(): Promise<any>;
    getMyOrders(): Promise<any>;
    addOrder(data: object): Promise<any>;
}
//# sourceMappingURL=Orders.d.ts.map
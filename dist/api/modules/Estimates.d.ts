import AxiosClient from "../../axios/axiosInstance";
export default class Estimates {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    getAllEstimates(): Promise<any>;
    addEstimates(data: object): Promise<any>;
    getEstimatesById(id: number): Promise<any>;
    editEstimates(id: number, data: object): Promise<any>;
    deleteEstimates(id: number): Promise<any>;
}
//# sourceMappingURL=Estimates.d.ts.map
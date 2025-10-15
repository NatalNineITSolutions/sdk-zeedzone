import AxiosClient from "../../axios/axiosInstance";
export default class CostCodes {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    addCostCode(data: object): Promise<any>;
    updateCostCode(id: number, data: object): Promise<any>;
    deleteCostCode(id: number): Promise<any>;
    getCostCode(): Promise<any>;
}
//# sourceMappingURL=CostCode.d.ts.map
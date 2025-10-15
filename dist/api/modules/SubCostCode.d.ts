import AxiosClient from "../../axios/axiosInstance";
export default class SubCostCodes {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    addSubCostCode(data: object): Promise<any>;
    updateSubCostCode(id: number, data: object): Promise<any>;
    deleteSubCostCode(id: number): Promise<any>;
    getSubCostCode(): Promise<any>;
}
//# sourceMappingURL=SubCostCode.d.ts.map
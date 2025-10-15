import AxiosClient from "../../axios/axiosInstance";
export default class Contracts {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    getAllContractType(): Promise<any>;
    getContractTypeById(id: number): Promise<any>;
    addContractType(data: object): Promise<any>;
    EditContractType(id: number, data: object): Promise<any>;
    deleteContractType(id: number): Promise<any>;
}
//# sourceMappingURL=Contract.d.ts.map
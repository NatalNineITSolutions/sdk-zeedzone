import AxiosClient from "../../axios/axiosInstance";
export default class Workforces {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    addWorkForces(data: object): Promise<any>;
    getAllWorkForces(): Promise<any>;
    getWorkForceById(id: number): Promise<any>;
    updateWorkForces(id: number, data: object): Promise<any>;
    deleteWorkForces(id: number): Promise<any>;
}
//# sourceMappingURL=WorkForces.d.ts.map
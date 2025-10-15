import AxiosClient from "../../axios/axiosInstance";
export default class Departments {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    getAllDeparment(): Promise<any>;
    getDeparmentByID(id: number): Promise<any>;
    addDeparment(data: object): Promise<any>;
    deleteDeparment(id: number): Promise<any>;
    editDeparment(id: number, data: object): Promise<any>;
}
//# sourceMappingURL=Department.d.ts.map
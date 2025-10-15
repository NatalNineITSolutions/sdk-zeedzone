import AxiosClient from "../../axios/axiosInstance";
export default class Employees {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    getAllEmployees(): Promise<any>;
    getEmplyoeesByID(id: number): Promise<any>;
    addEmployee(data: object): Promise<any>;
    deleteEmployee(id: number): Promise<any>;
    editEmployee(id: number, data: object): Promise<any>;
}
//# sourceMappingURL=Employees.d.ts.map
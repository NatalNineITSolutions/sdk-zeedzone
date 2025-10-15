import AxiosClient from "../../axios/axiosInstance";
export default class Desginations {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    getAllDesignation(): Promise<any>;
    getDesignationByID(id: number): Promise<any>;
    addDesignation(data: object): Promise<any>;
    deleteDesignation(id: number): Promise<any>;
    editDesignation(id: number, data: object): Promise<any>;
}
//# sourceMappingURL=Designation.d.ts.map
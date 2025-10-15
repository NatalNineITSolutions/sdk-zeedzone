import AxiosClient from "../../axios/axiosInstance";
export default class Materials {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    addMaterials(data: object): Promise<any>;
    getAllMaterials(): Promise<any>;
    getMaterialById(id: number): Promise<any>;
    updateMaterials(id: number, data: object): Promise<any>;
    deleteMaterials(id: number): Promise<any>;
}
//# sourceMappingURL=Materials.d.ts.map
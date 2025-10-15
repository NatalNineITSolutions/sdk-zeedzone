import AxiosClient from "../../axios/axiosInstance";
export default class Equipments {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    addEquipments(data: object): Promise<any>;
    getAllEquipments(): Promise<any>;
    getEquipmentById(id: number): Promise<any>;
    updateEquipment(id: number, data: object): Promise<any>;
    deleteEquipment(id: number): Promise<any>;
}
//# sourceMappingURL=Equipments.d.ts.map
import AxiosClient from "../../axios/axiosInstance";
export default class Clients {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    getClients(): Promise<any>;
    getClientByID(id: number): Promise<any>;
    addClient(data: object): Promise<any>;
    updateClient(id: number, data: object): Promise<any>;
    deleteClient(id: number): Promise<any>;
}
//# sourceMappingURL=Client.d.ts.map
export default class ZeedOneAPI {
    private axiosClient;
    constructor(ApiKey: string);
    login(email: string, password: string): Promise<any>;
    refresh(): Promise<any>;
    logout(): Promise<any>;
    getCompany(): Promise<any>;
    getLeads(): Promise<any>;
    getLeadByID(id: number): Promise<any>;
    addLead(data: object): Promise<any>;
    updateLead(id: number, data: object): Promise<any>;
    deleteLead(id: number): Promise<any>;
    getLeadSource(): Promise<any>;
    getLeadCustomFields(): Promise<any>;
    getLeadDetails(): Promise<any>;
    getLeadDetailsById(id: number): Promise<any>;
    getClients(): Promise<any>;
    getClientByID(id: number): Promise<any>;
    addClient(data: object): Promise<any>;
    updateClient(id: number, data: object): Promise<any>;
    deleteClient(id: number): Promise<any>;
}
//# sourceMappingURL=zeedzone.d.ts.map
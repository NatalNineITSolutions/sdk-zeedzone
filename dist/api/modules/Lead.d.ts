import AxiosClient from "../../axios/axiosInstance";
export default class Leads {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    getLeads(): Promise<any>;
    getLeadByID(id: number): Promise<any>;
    addLead(data: object): Promise<any>;
    updateLead(id: number, data: object): Promise<any>;
    deleteLead(id: number): Promise<any>;
    getLeadSource(): Promise<any>;
    getLeadCustomFields(): Promise<any>;
    getLeadDetails(): Promise<any>;
    getLeadDetailsById(id: number): Promise<any>;
}
//# sourceMappingURL=Lead.d.ts.map
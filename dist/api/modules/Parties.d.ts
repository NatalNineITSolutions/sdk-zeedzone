import AxiosClient from "../../axios/axiosInstance";
export default class Parties {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    addParty(data: object): Promise<any>;
    getAllParties(): Promise<any>;
    getPartyById(id: number): Promise<any>;
    updateParties(id: number, data: object): Promise<any>;
    deleteParties(id: number): Promise<any>;
}
//# sourceMappingURL=Parties.d.ts.map
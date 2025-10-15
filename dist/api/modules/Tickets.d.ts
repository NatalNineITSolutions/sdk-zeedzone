import AxiosClient from "../../axios/axiosInstance";
export default class Tickets {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    getAllTickets(): Promise<any>;
    getAllTicketType(): Promise<any>;
    getAllGroup(): Promise<any>;
    getTicketMe(): Promise<any>;
    getTicketUsers(id: number): Promise<any>;
    getTicketReply(): Promise<any>;
}
//# sourceMappingURL=Tickets.d.ts.map
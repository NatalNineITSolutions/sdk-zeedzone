import AxiosClient from "../../axios/axiosInstance";
export default class Event {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    getAllEvents(): Promise<any>;
    addEvents(data: object): Promise<any>;
    getEventById(id: number): Promise<any>;
    editEvents(id: number, data: object): Promise<any>;
    deleteEvents(id: number): Promise<any>;
}
//# sourceMappingURL=Event.d.ts.map
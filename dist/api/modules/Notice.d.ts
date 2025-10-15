import AxiosClient from "../../axios/axiosInstance";
export default class Notices {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    getAllNotice(): Promise<any>;
    addNotice(data: object): Promise<any>;
    getNoticeById(id: number): Promise<any>;
    editNotice(id: number, data: object): Promise<any>;
    deleteNotice(id: number): Promise<any>;
}
//# sourceMappingURL=Notice.d.ts.map
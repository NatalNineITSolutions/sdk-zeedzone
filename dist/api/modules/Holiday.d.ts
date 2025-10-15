import AxiosClient from "../../axios/axiosInstance";
export default class Holiday {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    getAllHoliday(): Promise<any>;
    getAllHolidayById(id: number): Promise<any>;
    addHoliday(data: object): Promise<any>;
    deleteHoliday(id: number): Promise<any>;
    editHoliday(id: number, data: object): Promise<any>;
}
//# sourceMappingURL=Holiday.d.ts.map
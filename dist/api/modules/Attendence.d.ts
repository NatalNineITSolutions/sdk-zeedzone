import AxiosClient from "../../axios/axiosInstance";
export default class Attendence {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    AttendenceClocksIn(data: object): Promise<any>;
    AttendenceClocksOut(data: object): Promise<any>;
}
//# sourceMappingURL=Attendence.d.ts.map
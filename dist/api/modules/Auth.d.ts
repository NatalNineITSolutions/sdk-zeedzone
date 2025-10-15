import AxiosClient from "../../axios/axiosInstance";
export default class Auth {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    login(email: string, password: string): Promise<any>;
    refresh(): Promise<any>;
    logout(): Promise<any>;
}
//# sourceMappingURL=Auth.d.ts.map
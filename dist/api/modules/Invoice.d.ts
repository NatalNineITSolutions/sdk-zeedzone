import AxiosClient from "../../axios/axiosInstance";
export default class Invoices {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    getAllInvoices(): Promise<any>;
    addInvoice(data: object): Promise<any>;
    getInvoicesById(id: number): Promise<any>;
    editInvoice(id: number, data: object): Promise<any>;
    deleteInvoice(id: number): Promise<any>;
}
//# sourceMappingURL=Invoice.d.ts.map
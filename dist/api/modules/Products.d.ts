import AxiosClient from "../../axios/axiosInstance";
export default class Products {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    getAllProducts(): Promise<any>;
    addProducts(data: object): Promise<any>;
    getProductById(id: number): Promise<any>;
    editProducts(id: number, data: object): Promise<any>;
    deleteProducts(id: number): Promise<any>;
    getAllProductCategory(): Promise<any>;
    getProductCategoryId(id: number): Promise<any>;
}
//# sourceMappingURL=Products.d.ts.map
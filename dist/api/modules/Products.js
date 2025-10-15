"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Products {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getAllProducts() {
        return this.axiosClient.request("get", `/products`);
    }
    addProducts(data) {
        return this.axiosClient.request("post", `/product`, data);
    }
    getProductById(id) {
        return this.axiosClient.request("get", `/products/${id}`);
    }
    editProducts(id, data) {
        return this.axiosClient.request("put", `/product/${id}`, data);
    }
    deleteProducts(id) {
        return this.axiosClient.request("delete", `/product/${id}`);
    }
    getAllProductCategory() {
        return this.axiosClient.request("get", `/productcategory`);
    }
    getProductCategoryId(id) {
        return this.axiosClient.request("get", `/productcategory/${id}`);
    }
}
exports.default = Products;
//# sourceMappingURL=Products.js.map
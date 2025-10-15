import AxiosClient from "../../axios/axiosInstance";

export default class Products {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

  getAllProducts() {
    return this.axiosClient.request("get", `/products`)
  }


  addProducts(data: object) {
    return this.axiosClient.request("post", `/product`, data)
  }


  getProductById(id: number) {
    return this.axiosClient.request("get", `/products/${id}`)
  }

  editProducts(id: number, data: object) {
    return this.axiosClient.request("put", `/product/${id}`, data)
  }

  deleteProducts(id: number) {
    return this.axiosClient.request("delete", `/product/${id}`)
  }

    getAllProductCategory(){
     return this.axiosClient.request("get",`/productcategory`)
  }

  getProductCategoryId(id:number){
    return this.axiosClient.request("get",`/productcategory/${id}`)
  }

  

  

}



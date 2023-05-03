import axiosClient from "./axios.clients";

const API_PATH = "/api/v1/products";

const getProducts = (page,size) => {
    return axiosClient.get(API_PATH + `?page=${page}&size=${size}`);
}
const productsService = {
    getProducts
}
export default productsService;



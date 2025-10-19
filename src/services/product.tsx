import axios from "axios";
//import api from "./api.tsx";

axios.defaults.baseURL = "http://127.0.0.1:8000"



const productService = {
    getProducts: async () => {
        const { data } = await axios.get("/api/products/");
        return data
    },

    removeProducts: async (to_update: number) => {
        const { data } = await axios.patch("/api/products/" + to_update + "/",{
            "id" : to_update
        });
        return data
    }
};

export default productService;

import api from "./api.tsx";

const productService = {
    getProducts: async () => {
        const { data } = await api.get("/api/products/");
        return data
    }
};

export default productService;

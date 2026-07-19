import type { Product } from "@/types/product";
import type { FakeStoreProduct } from "@/types/api/fakestore";

// Products service
const BASE_URL = "https://fakestoreapi.com" as const;

const mapProduct = (apiProduct: FakeStoreProduct): Product =>{
    return {
        id: apiProduct.id,
        title: apiProduct.title,
        description: apiProduct.description,
        price: apiProduct.price,
        images: [apiProduct.image],
        category: apiProduct.category,
        rating: {
            rate: apiProduct.rating.rate,
            count: apiProduct.rating.count
        }
    }
}

export const getProducts = async (): Promise<Product[]> => {
    try{
        const response = await fetch(`${BASE_URL}/products`);
        if(!response.ok){
            throw new Error("Failed to fetch products");
        }
        const data: FakeStoreProduct[] = await response.json();
        return data.map(mapProduct);
    }
    catch(err){
         throw new Error("Failed to fetch products", { cause: err })
    }
};
    
export const getProduct = async (id: number): Promise<Product> =>{
      try{
        const response = await fetch(`${BASE_URL}/products/${id}`);
        if(!response.ok){
            throw new Error(`Failed to fetch product with id:${id}`);
        }
        const data: FakeStoreProduct = await response.json();
        return mapProduct(data);
    }
    catch(err){
         throw new Error(`Failed to fetch product with id:${id}`, { cause: err })
    }
}



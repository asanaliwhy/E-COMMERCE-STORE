export interface FakeStoreProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    rating: {
        rate: number;
        count: number;
    };
    brand?: string;
}
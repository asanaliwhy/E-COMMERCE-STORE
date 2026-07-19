import { Product } from "@/types/product";
import Image from "next/image";
import Button from "../ui/Button";



export default function ProductCard({ product }: {product: Product}) {
  return (
    <div className="product-card">
      <Image src={product.images.at(0) ?? "placeholder.png"} alt={product.title} width={200} height={200} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.rating.rate}</p>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <Button>View product</Button>
    </div>
  );
}``
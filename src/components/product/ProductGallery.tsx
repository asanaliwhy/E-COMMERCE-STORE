import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || "");

  if (!images.length) {
    return (
      <div className="aspect-square w-full rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-400">
        No Image Available
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-square w-full relative overflow-hidden rounded-lg bg-neutral-100 border border-neutral-200">
        <Image
          src={selectedImage}
          alt="Product image"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain object-center"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`aspect-square relative overflow-hidden rounded-md border ${
              selectedImage === image ? "border-blue-600 ring-2 ring-blue-500/20" : "border-neutral-200"
            }`}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              fill
              sizes="100px"
              className="object-contain object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

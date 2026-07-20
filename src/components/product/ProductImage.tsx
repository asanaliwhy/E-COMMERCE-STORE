import Image from "next/image";

interface ProductImageProps{
  image: string,
  title: string,
  width?: number,
  height?: number,
  className?: string,
}

export default function ProductImage({image, title, className}: ProductImageProps){
  return (
    <div className={`relative aspect-square w-full rounded-[var(--radius-lg)] overflow-hidden border border-border/30 group ${className ?? ""}`}>
      {/* White background for product images — always crisp regardless of theme */}
      <div className="absolute inset-0 bg-image-bg" />
      <Image
        src={image}
        alt={title}
        fill
        className="object-contain p-8 relative z-10 transition-transform duration-500 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )
}
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/producto/${product.id}`} className="group block">
      <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-large transition-all duration-500 hover:-translate-y-2 group-hover:border-blue-200">
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 relative">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {product.featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-medium">
                Destacado
              </span>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 text-lg leading-tight">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Bs. {product.price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

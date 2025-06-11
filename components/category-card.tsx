import Image from "next/image"
import Link from "next/link"
import type { Category } from "@/types"
import { ArrowRight } from "lucide-react"

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categoria/${category.id}`} className="group block">
      <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-large transition-all duration-500 hover:-translate-y-3 group-hover:border-blue-200">
        <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-sky-50 to-cyan-50 relative">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {category.name}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
              {category.productCount} productos
            </span>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-6 py-3 rounded-xl font-semibold group-hover:shadow-large transition-all duration-300 group-hover:scale-105">
              <span>Ver productos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

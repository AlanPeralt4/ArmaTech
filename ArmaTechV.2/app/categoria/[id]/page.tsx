import Layout from "@/components/layout"
import ProductCard from "@/components/product-card"
import { categories, products } from "@/data/products"
import { notFound } from "next/navigation"

interface CategoryPageProps {
  params: {
    id: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((cat) => cat.id === params.id)
  const categoryProducts = products.filter((product) => product.category === params.id)

  if (!category) {
    notFound()
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Header */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-50/50 to-cyan-50/50 rounded-2xl -z-10"></div>
          <div className="p-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{category.name}</h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed max-w-3xl">{category.description}</p>
            <div className="flex items-center space-x-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                {categoryProducts.length} productos encontrados
              </span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay productos disponibles en esta categoría.</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }))
}

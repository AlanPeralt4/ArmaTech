import Layout from "@/components/layout"
import { products } from "@/data/products"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import type { ProductParams } from "@/types"
import { Metadata } from "next"

// Metadata dinámica
export async function generateMetadata({ params }: ProductParams): Promise<Metadata> {
  const product = products.find((p) => p.id === params.id)
  
  if (!product) {
    return {
      title: "Producto no encontrado",
      description: "El producto que buscas no existe"
    }
  }

  return {
    title: `${product.name} | ArmaTech`,
    description: product.description
  }
}

export default async function ProductPage({ params }: ProductParams) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-12">
          <Link
            href={`/categoria/${product.category}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a la categoría
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images && product.images.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <div key={index} className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${product.name} - Vista ${index + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              {product.featured && (
                <span className="inline-block bg-gradient-to-r from-blue-600 to-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Producto Destacado
                </span>
              )}
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent mb-6">
                Bs. {product.price.toLocaleString()}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Descripción</h2>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Especificaciones Técnicas</h2>
              <div className="bg-gradient-to-br from-sky-50/50 to-cyan-50/50 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/30 to-sky-50/30 animate-gradient-x"></div>
                <div className="relative space-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0"
                    >
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Incluye</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Garantía oficial del fabricante</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Soporte técnico especializado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Envío seguro y con seguimiento</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Factura legal</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button className="w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white py-5 px-8 rounded-2xl font-bold text-xl hover:shadow-large transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                Consultar Disponibilidad
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                Contáctanos para verificar stock y opciones de pago
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// Generación estática de rutas
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

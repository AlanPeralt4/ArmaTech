import Layout from "@/components/layout"
import CategoryCard from "@/components/category-card"
import ProductCard from "@/components/product-card"
import { categories, products } from "@/data/products"
import { ArrowRight, Star, Shield, Truck, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const featuredProducts = products.filter((product) => product.featured)

  return (
    <Layout>
      {/* Animated Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-cyan-400 to-sky-600">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-600 animate-gradient-x opacity-75"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-sky-300 via-cyan-300 to-sky-500 animate-gradient-y opacity-50"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full animate-float blur-sm"></div>
        <div
          className="absolute top-40 right-20 w-20 h-20 bg-white/10 rounded-full animate-float blur-sm"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float blur-sm"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="w-8 h-8 text-cyan-200 mr-3" />
              <span className="text-cyan-200 font-semibold tracking-wide uppercase text-sm">Tecnología Premium</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-lg leading-tight">
              Tecnología de
              <span className="block bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
                Vanguardia
              </span>
              <span className="block text-4xl md:text-5xl text-cyan-100 font-medium mt-2">en Bolivia</span>
            </h1>
            <p className="text-xl md:text-2xl text-sky-100 mb-12 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Descubre los mejores productos tecnológicos con garantía, soporte técnico especializado y los precios más
              competitivos del mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="#categorias"
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 inline-flex items-center justify-center shadow-large hover:shadow-xl hover:-translate-y-1 hover:scale-105"
              >
                Explorar Productos
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
              <Link
                href="#destacados"
                className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm hover:shadow-large hover:-translate-y-1 hover:scale-105"
              >
                Ver Destacados
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-50/50 to-cyan-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">¿Por qué elegirnos?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprometidos con la excelencia en cada aspecto de nuestro servicio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-large group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Garantía Extendida</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Todos nuestros productos incluyen garantía extendida y soporte técnico especializado las 24 horas.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-large group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Calidad Premium</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Seleccionamos cuidadosamente cada producto para garantizar la mejor calidad y rendimiento.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-large group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Envío Seguro</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Entrega segura y rápida en toda Bolivia con seguimiento en tiempo real y seguro incluido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categorias" className="py-24 bg-gradient-to-br from-gray-50 to-sky-50/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/20 to-sky-50/20 animate-gradient-x"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Explora Nuestras Categorías</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Encuentra exactamente lo que necesitas en nuestras categorías especializadas, cada una cuidadosamente
              curada
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="destacados" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-l from-sky-50/30 to-cyan-50/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Productos Destacados</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Los productos más populares y mejor valorados por nuestros clientes, seleccionados especialmente para ti
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

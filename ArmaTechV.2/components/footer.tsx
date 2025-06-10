import Link from "next/link"
import { Monitor, MapPin, Phone, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl flex items-center justify-center shadow-large">
                <Monitor className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold">ArmaTech</span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
              Tu tienda de tecnología de confianza en Bolivia. Ofrecemos los mejores productos tecnológicos con garantía
              y soporte técnico especializado.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-lg">Cochabamba, Bolivia</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg">+591 63908996</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">Alanperalta@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6">Categorías</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/categoria/laptops"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-lg block py-1"
                >
                  Laptops
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/monitors"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-lg block py-1"
                >
                  Monitores
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/cpus"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-lg block py-1"
                >
                  Procesadores
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/graphics-cards"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-lg block py-1"
                >
                  Tarjetas Gráficas
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/accessories"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-lg block py-1"
                >
                  Accesorios
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-lg block py-1">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-lg block py-1">
                  Garantía
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-lg block py-1">
                  Soporte Técnico
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-lg block py-1">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-lg">&copy; 2025 ArmaTech. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0 text-gray-400">
            <span className="text-lg">Hecho con</span>
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-lg">en Bolivia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

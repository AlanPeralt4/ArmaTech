import { categories } from "@/data/products"
import { PageProps } from "next/types"

export interface Product {
  id: string
  name: string
  price: number
  image: string
  images?: string[]
  category: string
  description: string
  specs: Record<string, string>
  featured?: boolean
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  productCount: number
}

// Tipos para parámetros de rutas dinámicas
export type CategoryParams = PageProps & {
  params: {
    id: CategoryId
  }
}

export type ProductParams = PageProps & {
  params: {
    id: ProductId
  }
}

// Validación de IDs en tiempo de compilación
export type CategoryId = typeof categories[number]["id"]
export type ProductId = string // Podemos hacerlo más específico si es necesario

// Metadata types
export type PageMetadata = {
  title: string
  description: string
}

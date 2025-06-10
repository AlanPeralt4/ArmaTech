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

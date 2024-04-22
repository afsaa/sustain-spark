interface GlobalErrorProps {
  error: Error
  reset: () => void
}

interface Rating {
  count: number
  rate: number
}

interface Product {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
  rating: Rating
  savedCO2?: number
}

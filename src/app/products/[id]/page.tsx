import { ProductView } from '@/components/products/ProductView'
import { getProduct } from '@/services/fakestore'

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params
  const product = await getProduct(id)

  return <ProductView {...product} />
}

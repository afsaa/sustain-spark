import { ProductCard } from '@/components/products/ProductCard'

export default async function ProductsPage() {
  const response = await fetch('http://localhost:3000/api', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  const products = await response.json()
  return (
    <section className="m-5">
      <h1 className="mb-4 text-3xl">Products</h1>
      <div className="grid grid-cols-4 grid-flow-row justify-items-stretch gap-8">
        {products?.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

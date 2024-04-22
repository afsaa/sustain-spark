export default async function ProductsPage() {
  const response = await fetch('http://localhost:3000/api', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  const products = await response.json()
  return (
    <div>
      <h1>Products</h1>
      {products?.map((product: Product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

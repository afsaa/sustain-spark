import { getProducts } from '../../services/fakestore'

export async function GET() {
  const response = await getProducts()

  const products = await response.json()

  return Response.json(products)
}

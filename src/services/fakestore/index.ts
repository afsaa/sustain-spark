import { fakeStoreUrls } from './urls'

export const getProducts = async () => {
  try {
    const response = await fetch(fakeStoreUrls.products, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json()
  } catch (error) {
    console.error(error)
  }
}

export const getProduct = async (id: number) => {
  try {
    const response = await fetch(fakeStoreUrls.product + id)
    return response.json()
  } catch (error) {
    console.error(error)
  }
}

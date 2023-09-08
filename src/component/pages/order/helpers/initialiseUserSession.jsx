import { getBasketFromApi } from "../../../../API/basket.jsx"
import { getProductsFromApi } from "../../../../API/products.jsx"
import { getUserIdFromApi } from "../../../../API/users.jsx"

const initialiseProducts = async (username, setProducts) => {
  const userId = await getUserIdFromApi(username)
  const productsExisting = await getProductsFromApi(userId)
  if (!productsExisting) {
    setProducts([])
    return
  }
  setProducts(productsExisting)
}

const initialiseBasket = (invoiceId, setBasket) => {

  const basketExisting = getBasketFromApi(invoiceId)
  if (!basketExisting) {
    setBasket([])
    return
  }
  setBasket(basketExisting)
}

export const initialiseUserSession = async (username, setProducts, setBasket) => {
  await initialiseProducts(username, setProducts)
  initialiseBasket(username, setBasket)
}

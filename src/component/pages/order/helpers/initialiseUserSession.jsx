import { getProductsFromApi, initialiseProductsFromApi } from "../../../../API/product.jsx"
import { getLocalStorage } from "../../../../utils/window.jsx"

const initialiseProducts = async (userId, setProducts) => {
  const productsReceived = await getProductsFromApi("1")
  setProducts(productsReceived)
}

const initialiseBasket = (username, setBasket) => {
  const basketReceived = getLocalStorage(username)
  if (basketReceived) setBasket(basketReceived)
}

export const initialiseUserSession = async (username, setProducts, setBasket) => {
  await initialiseProducts(username, setProducts)
  initialiseBasket(username, setBasket)
}

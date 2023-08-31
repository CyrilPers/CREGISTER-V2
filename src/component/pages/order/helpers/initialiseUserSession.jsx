
import { getProducts } from "../../../../API/products.jsx"
import { getLocalStorage } from "../../../../utils/window.jsx"

const initialiseProducts = async (username, setProducts) => {
  const productsReceived = await getProducts(username)
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

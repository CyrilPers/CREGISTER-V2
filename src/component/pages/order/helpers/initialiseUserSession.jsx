
import { getProducts } from "../../../../API/products.jsx"
import { getLocalStorage } from "../../../../utils/window.jsx"

const intialiseProducts = async (username, setProducts) => {
  const productsReceived = await getProducts(username)
  setProducts(productsReceived)
}

const intialiseBasket = (username, setBasket) => {
  const basketReceived = getLocalStorage(username)
  if (basketReceived) setBasket(basketReceived)
}

export const initialiseUserSession = async (username, setProducts, setBasket) => {
  await intialiseProducts(username, setProducts)
  intialiseBasket(username, setBasket)
}

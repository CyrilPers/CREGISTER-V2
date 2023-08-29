
import { getProducts } from "../../../../API/products.jsx"
import { getLocalStorage } from "../../../../utils/window.jsx"

const intialiseMenu = async (username, setMenu) => {
  const menuReceived = await getProducts(username)
  setMenu(menuReceived)
}

const intialiseBasket = (username, setBasket) => {
  const basketReceived = getLocalStorage(username) // localStorage est synchrone, pas besoin de "await".
  if (basketReceived) setBasket(basketReceived)
}

export const initialiseUserSession = async (username, setProducts, setBasket) => {
  await intialiseMenu(username, setProducts)
  intialiseBasket(username, setBasket)
}

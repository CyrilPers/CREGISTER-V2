import { getProductsFromApi } from "../../../../API/product.jsx"
import { getUserIdFromApi } from "../../../../API/users.jsx"
import { getLocalStorage } from "../../../../utils/window.jsx"

const initialiseProducts = async (username, setProducts) => {
  const usernameId = await getUserIdFromApi(username)
  console.log(usernameId)
  const productsReceived = await getProductsFromApi(usernameId)
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

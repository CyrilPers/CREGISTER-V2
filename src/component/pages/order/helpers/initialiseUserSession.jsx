import { getBasketFromApi } from "../../../../API/basket.jsx"
import { getProductsFromApi, initialiseProductsFromApi } from "../../../../API/products.jsx"
import { createUserFromApi, getUserIdFromApi } from "../../../../API/users.jsx"

export const initialiseProducts = async (username, setProducts) => {


  const userId = await getUserIdFromApi(username)
  const productsExisting = await getProductsFromApi(userId)
  if (!productsExisting) {
    setProducts([])
    return
  }
  setProducts(productsExisting)
}

export const initialiseBasket = async (invoiceId, setBasket) => {

  const basketExisting = await getBasketFromApi(invoiceId)
  if (!basketExisting) {
    setBasket([])
    return
  }
  setBasket(basketExisting)
}

export const initialiseUserSession = async (setUserId, userId, setProducts, username) => {
  await initialiseUserFromApi(username, setUserId)
  initialiseProductsFromApi(userId, setProducts)
}


export const initialiseUserFromApi = async (username, setUserId) => {
  await createUserFromApi(username)
  const newUserId = await getUserIdFromApi(username)
  console.log("newUserId", newUserId)
  setUserId(newUserId)
}


export const authentificateUser = async (username) => {
  const existingUser = await getUserIdFromApi(username)
  if (!existingUser) {
    await initialiseUserFromApi(username)
  }
  return existingUser
}
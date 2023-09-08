import { getBasketFromApi } from "../../../../API/basket.jsx"
import { getProductsFromApi, initialiseProductsFromApi } from "../../../../API/products.jsx"
import { createUserFromApi, getUserIdFromApi } from "../../../../API/users.jsx"

export const initialiseProducts = async (userId, setProducts) => {

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

export const initialiseUserSession = async (setUserId, username) => {
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

export const initialiseUserFromApi = async (username) => {
  await createUserFromApi(username)
  newUserId = await getUserIdFromApi(username)
  initialiseProductsFromApi(newUserId)
}



import { getBasketFromApi } from "../../../../API/basket.jsx"
import { getProductsFromApi, initialiseProductsFromApi } from "../../../../API/products.jsx"
import { createUserFromApi, getUserIdFromApi } from "../../../../API/users.jsx"

// export const initialiseProducts = async (username, setProducts) => {
//   const newUserId = await getUserIdFromApi(username)
//   const productsExisting = await getProductsFromApi(newUserId)
//   if (!productsExisting) {
//     setProducts([])
//     return
//   }
//   setProducts(productsExisting)
// }

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

export const initialiseUser = async (setUserId, username) => {
  const newUserId = await getUserIdFromApi(username)
  setUserId(newUserId)
}

export const authentificateUser = async (username) => {
  const existingUser = await getUserIdFromApi(username)
  if (!existingUser) {
    await initialiseNewUserFromApi(username)
  }
  return existingUser
}

export const initialiseNewUserFromApi = async (username) => {
  await createUserFromApi(username)
  const newUserId = await getUserIdFromApi(username)
  initialiseProductsFromApi(newUserId)
}



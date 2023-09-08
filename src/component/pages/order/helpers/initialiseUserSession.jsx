import { useContext } from "react"
import { getBasketFromApi } from "../../../../API/basket.jsx"
import { getProductsFromApi } from "../../../../API/products.jsx"
import { getUserIdFromApi } from "../../../../API/users.jsx"
import AdminContext from "../../../../context/AdminContext.jsx"



export const initialiseProducts = async (username, setProducts) => {

  const { basket } = useContext(AdminContext)


  const userId = await getUserIdFromApi(username)
  const productsExisting = await getProductsFromApi(userId)
  if (!productsExisting) {
    setProducts([])
    return
  }
  setProducts(productsExisting)
}

export const initialiseBasket = async (invoiceId, setBasket, basket) => {

  const basketExisting = await getBasketFromApi(invoiceId)
  if (!basketExisting) {
    setBasket([])
    return
  }
  console.log("basketExisting", basketExisting)
  setBasket(basketExisting)
  console.log(basket)
}

export const initialiseUserSession = async (username, setProducts) => {
  await initialiseProducts(username, setProducts)
}

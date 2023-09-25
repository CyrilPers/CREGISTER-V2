import { getBasketFromApi } from "../../../../API/basket.jsx"
import { getCategoriesFromApi, initialiseCategoriesAndProductsFromApi, resetCategoriesAndProductsFromApi } from "../../../../API/categories.jsx"
import { getCustomersFromApi, initialiseCustomersFromApi } from "../../../../API/customers.jsx"
import { getInvoiceFromApi } from "../../../../API/invoice.jsx"
import { getProductsFromApi } from "../../../../API/products.jsx"
import { createUserFromApi, getUserIdFromApi } from "../../../../API/users.jsx"

export const initialiseProducts = async (userId, setProducts) => {

  const productsExisting = await getProductsFromApi(userId)
  if (!productsExisting) {
    setProducts([])
    return
  }
  setProducts(productsExisting)
}

export const initialiseCustomers = async (userId, setCustomers) => {
  const customersExisting = await getCustomersFromApi(userId)
  if (!customersExisting) {
    setCustomers([])
    return
  }
  setCustomers(customersExisting)

}

export const initialiseCategories = async (userId, setCategories) => {
  const categoriesExisting = await getCategoriesFromApi(userId)
  if (!categoriesExisting) {
    setCategories([])
    return
  }
  setCategories(categoriesExisting)
}


export const initialiseBasket = async (invoiceId, setBasket) => {

  const basketExisting = await getBasketFromApi(invoiceId)
  if (!basketExisting) {
    setBasket([])
    return
  }
  setBasket(basketExisting)
}

export const initialiseInvoice = async (invoiceId, setCustomer, setInvoice) => {

  const invoiceExisting = await getInvoiceFromApi(invoiceId)
  setInvoice(invoiceExisting)
  const customerExisting = invoiceExisting.customer
  if (!customerExisting) {
    setCustomer()
    return
  }
  setCustomer(customerExisting)
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
  await initialiseCategoriesAndProductsFromApi(newUserId)
  initialiseCustomersFromApi(newUserId)
}


export const resetCategoryAndProducts = async (userId, setCategories, setProducts) => {
  await resetCategoriesAndProductsFromApi(userId)
  const updatedCategories = await getCategoriesFromApi(userId);
  setCategories(updatedCategories);
  const updatedProducts = await getProductsFromApi(userId);
  setProducts(updatedProducts);
}




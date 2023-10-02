import { getBasketFromApi } from "../../../../API/basket.jsx"
import { getCategoriesFromApi, initialiseCategoriesAndProductsFromApi, resetCategoriesAndProductsFromApi } from "../../../../API/categories.jsx"
import { getCustomersFromApi, initialiseCustomersFromApi } from "../../../../API/customers.jsx"
import { getInvoiceFromApi, getInvoicesFromApi } from "../../../../API/invoice.jsx"
import { getProductsFromApi } from "../../../../API/product.jsx"
import { createUserFromApi, getUserIdFromApi } from "../../../../API/users.jsx"


export async function initialiseProducts(userId, setProducts) {

  const productsExisting = await getProductsFromApi(userId)
  if (!productsExisting) {
    setProducts([])
    return
  }
  setProducts(productsExisting)
}

export async function initialiseInvoices(userId, setInvoices) {

  const invoicesExisting = await getInvoicesFromApi(userId)
  if (!invoicesExisting) {
    setInvoices([])
    return
  }
  setInvoices(invoicesExisting)
}

export async function initialiseCustomers(userId, setCustomers) {
  const customersExisting = await getCustomersFromApi(userId)
  if (!customersExisting) {
    setCustomers([])
    return
  }
  setCustomers(customersExisting)

}

export async function initialiseCategories(userId, setCategories) {
  const categoriesExisting = await getCategoriesFromApi(userId)
  if (!categoriesExisting) {
    setCategories([])
    return
  }
  setCategories(categoriesExisting)
}


export async function initialiseBasket(invoiceId, setBasket) {

  const basketExisting = await getBasketFromApi(invoiceId)
  if (!basketExisting) {
    setBasket([])
    return
  }
  setBasket(basketExisting)
}

export async function initialiseInvoice(invoiceId, setCustomer, setInvoice) {

  const invoiceExisting = await getInvoiceFromApi(invoiceId)
  setInvoice(invoiceExisting)
  const customerExisting = invoiceExisting.customer
  if (!customerExisting) {
    setCustomer()
    return
  }
  setCustomer(customerExisting)
}


export async function initialiseUser(setUserId, username) {
  const newUserId = await getUserIdFromApi(username)
  setUserId(newUserId)
}

export async function authentificateUser(username) {
  const existingUser = await getUserIdFromApi(username)
  if (!existingUser) {
    await initialiseNewUserFromApi(username)
  }
  return existingUser
}

export async function initialiseNewUserFromApi(username) {
  await createUserFromApi(username)
  const newUserId = await getUserIdFromApi(username)
  await initialiseCategoriesAndProductsFromApi(newUserId)
  initialiseCustomersFromApi(newUserId)
}



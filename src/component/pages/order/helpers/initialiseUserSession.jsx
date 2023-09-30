import { getBasketFromApi } from "../../../../API/basket.jsx"
import { getCategoriesFromApi, initialiseCategoriesAndProductsFromApi, resetCategoriesAndProductsFromApi } from "../../../../API/categories.jsx"
import { getInvoiceFromApi, getInvoicesFromApi } from "../../../../API/invoice.jsx"
import { useCustomersApi } from "../../../../API/useCustomersApi.jsx"
import { useProductsApi } from "../../../../API/useProductsApi.jsx"
import { createUserFromApi, getUserIdFromApi } from "../../../../API/users.jsx"


export const initialiseUserSession = () => {
  const { getProductsFromApi } = useProductsApi()
  const { getCustomersFromApi, initialiseCustomersFromApi } = useCustomersApi()


  const initialiseProducts = async (userId, setProducts) => {

    const productsExisting = await getProductsFromApi(userId)
    console.log("productsuserID", userId)
    if (!productsExisting) {
      setProducts([])
      return
    }
    setProducts(productsExisting)
  }

  const initialiseInvoices = async (userId, setInvoices) => {

    const invoicesExisting = await getInvoicesFromApi(userId)
    if (!invoicesExisting) {
      setInvoices([])
      return
    }
    setInvoices(invoicesExisting)
  }

  const initialiseCustomers = async (userId, setCustomers) => {
    const customersExisting = await getCustomersFromApi(userId)
    if (!customersExisting) {
      setCustomers([])
      return
    }
    setCustomers(customersExisting)

  }

  const initialiseCategories = async (userId, setCategories) => {
    console.log("categoriesuserID", userId)
    const categoriesExisting = await getCategoriesFromApi(userId)
    if (!categoriesExisting) {
      setCategories([])
      return
    }
    setCategories(categoriesExisting)
  }


  const initialiseBasket = async (invoiceId, setBasket) => {

    const basketExisting = await getBasketFromApi(invoiceId)
    if (!basketExisting) {
      setBasket([])
      return
    }
    setBasket(basketExisting)
  }

  const initialiseInvoice = async (invoiceId, setCustomer, setInvoice) => {

    const invoiceExisting = await getInvoiceFromApi(invoiceId)
    setInvoice(invoiceExisting)
    const customerExisting = invoiceExisting.customer
    if (!customerExisting) {
      setCustomer()
      return
    }
    setCustomer(customerExisting)
  }


  const initialiseUser = async (setUserId, username) => {
    const newUserId = await getUserIdFromApi(username)
    setUserId(newUserId)
  }

  const authentificateUser = async (username) => {
    const existingUser = await getUserIdFromApi(username)
    if (!existingUser) {
      await initialiseNewUserFromApi(username)
    }
    return existingUser
  }

  const initialiseNewUserFromApi = async (username) => {
    await createUserFromApi(username)
    const newUserId = await getUserIdFromApi(username)
    await initialiseCategoriesAndProductsFromApi(newUserId)
    initialiseCustomersFromApi(newUserId)
  }


  const resetCategoryAndProducts = async (userId, setCategories, setProducts) => {
    await resetCategoriesAndProductsFromApi(userId)
    const updatedCategories = await getCategoriesFromApi(userId);
    setCategories(updatedCategories);
    const updatedProducts = await getProductsFromApi(userId);
    setProducts(updatedProducts);
  }
  return { initialiseProducts, initialiseInvoices, initialiseCustomers, initialiseCategories, initialiseBasket, initialiseInvoice, initialiseUser, authentificateUser, initialiseNewUserFromApi, resetCategoryAndProducts }
}



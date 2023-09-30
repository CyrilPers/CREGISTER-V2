import { useState } from "react"
import { addItemToArray, deepClone, getIndex, removeItemFromArray } from "../utils/arrays"
import { EMPTY_CUSTOMER } from '../enum/customer.jsx'
import { useCustomersApi } from "../API/useCustomersApi"

export const useCustomers = () => {
    const [customers, setCustomers] = useState([])
    const [selectedCustomer, setSelectedCustomer] = useState(EMPTY_CUSTOMER)
    const { deleteCustomerFromApi, createCustomerFromApi, updateCustomerFromApi, newCustomerApi } = useCustomersApi()


    const deleteCustomer = async (id) => {
        await deleteCustomerFromApi(id)
        const customersCopy = deepClone(customers)
        const updatedCustomers = removeItemFromArray(id, customersCopy)
        setCustomers(updatedCustomers)
    }

    const addCustomer = async (newCustomer, userId) => {
        await createCustomerFromApi(newCustomer, userId)
        const customersCopy = deepClone(customers)
        console.log("newCustomerApi", newCustomerApi)
        const updatedCustomers = addItemToArray(newCustomerApi, customersCopy)
        setCustomers(updatedCustomers)
    }

    const editCustomer = (customerBeingEdited, userId) => {
        const customersCopy = deepClone(customers)
        const indexOfCustomerToEdit = getIndex(customerBeingEdited.id, customers)
        customersCopy[indexOfCustomerToEdit] = customerBeingEdited
        setCustomers(customersCopy)
        updateCustomerFromApi(customerBeingEdited, userId)
    }



    return { customers, setCustomers, deleteCustomer, selectedCustomer, setSelectedCustomer, addCustomer, editCustomer, addCustomer }
}


import { useState } from "react"
import { deepClone, getIndex, removeItemFromArray } from "../utils/arrays"
import { createCustomerFromApi, deleteCustomerFromApi, getCustomersFromApi, updateCustomerFromApi } from '../API/customers.jsx'
import { EMPTY_CUSTOMER } from '../enum/customer.jsx'


export const useCustomers = () => {
    const [customers, setCustomers] = useState([])
    const [selectedCustomer, setSelectedCustomer] = useState(EMPTY_CUSTOMER)


    const deleteCustomer = async (id) => {
        await deleteCustomerFromApi(id)
        const customersCopy = deepClone(customers)
        const updatedCustomers = removeItemFromArray(id, customersCopy)
        setCustomers(updatedCustomers)
    }

    const addCustomer = async (newCustomer, userId) => {
        await createCustomerFromApi(newCustomer, userId)
        const updatedCustomers = await getCustomersFromApi(userId)
        setCustomers(updatedCustomers)
    }

    const editCustomer = (customerBeingEdited) => {
        const customersCopy = deepClone(customers)
        const indexOfCustomerToEdit = getIndex(customerBeingEdited.id, customers)
        customersCopy[indexOfCustomerToEdit] = customerBeingEdited
        setCustomers(customersCopy)
        updateCustomerFromApi(customerBeingEdited)
    }



    return { customers, setCustomers, deleteCustomer, selectedCustomer, setSelectedCustomer, addCustomer, editCustomer, addCustomer }
}


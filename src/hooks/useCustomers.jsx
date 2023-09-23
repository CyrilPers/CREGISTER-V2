import { useState } from "react"
import { deepClone, removeItemFromArray } from "../utils/arrays"
import { createCustomerFromApi, deleteCustomerFromApi, getCustomersFromApi } from '../API/customers.jsx'
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

    return { customers, setCustomers, deleteCustomer, selectedCustomer, setSelectedCustomer, addCustomer }
}


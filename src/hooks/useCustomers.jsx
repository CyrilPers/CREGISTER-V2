import { useState } from "react"
import { deepClone, removeItemFromArray } from "../utils/arrays"
import { deleteCustomerFromApi } from '../API/customers.jsx'
import { EMPTY_CUSTOMER } from '../enum/customer.jsx'


export const useCustomers = () => {
    const [customers, setCustomers] = useState([])
    const [selectedCustomer, setSelectedCustomer] = useState(EMPTY_CUSTOMER)


    const deleteCustomer = async (id) => {
        await deleteCustomerFromApi(id)
        const customersCopy = deepClone(customers)
        const updatedCustomer = removeItemFromArray(id, customersCopy)
        setCustomers(updatedCustomer)
    }

    return { customers, setCustomers, deleteCustomer, selectedCustomer, setSelectedCustomer }
}


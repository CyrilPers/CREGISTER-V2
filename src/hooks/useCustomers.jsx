import { useState } from "react"
import { deepClone, removeItemFromArray } from "../utils/arrays"

export const useCustomers = () => {
    const [customers, setCustomers] = useState([])


    const deleteCustomer = (id) => {
        const customersCopy = deepClone(customers)
        const updatedCustomer = removeItemFromArray(id, customersCopy)
        setCustomers(updatedCustomer)
        deleteCustomerFromApi(id)
    }

    return { customers, setCustomers }
}


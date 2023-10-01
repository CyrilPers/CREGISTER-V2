import { useState } from "react"
import { addItemToArray, deepClone, getIndex, removeItemFromArray } from "../utils/arrays"
import { EMPTY_CUSTOMER } from '../enum/customer.jsx'
import { createCustomerFromApi, deleteCustomerFromApi, updateCustomerFromApi } from "../API/customers"

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
        let newCustomerApi;
        await createCustomerFromApi(newCustomer, userId)
            .then(apiResponse => {
                newCustomerApi = apiResponse;
            });
        const customersCopy = deepClone(customers)
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


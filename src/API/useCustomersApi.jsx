import axios from 'axios'
import { useState } from 'react'




export const useCustomersApi = () => {

    const API_URL = 'http://localhost:3001/cregister/api/customer/'
    const [newCustomerApi, setNewCustomerApi] = useState()

    const initialiseCustomersFromApi = async (userId) => {
        try {
            await axios.post(`${API_URL}initialise/${userId}`);
        } catch (error) {
            console.log(error)
        }
    }

    const getCustomersFromApi = async (userId) => {
        try {
            const { data } = await axios.get(`${API_URL}user=${userId}`);
            return data;
        } catch (error) {
            console.log(error)
        }
    }


    const deleteCustomerFromApi = async (customerId) => {
        try {
            await axios.delete(`${API_URL}delete/${customerId}`);
        } catch (error) {
            console.log(error)
        }
    }

    const createCustomerFromApi = async (newCustomer, userId) => {
        try {
            const { data } = await axios.post(`${API_URL}create`, { name: newCustomer.name, surname: newCustomer.surname, phoneNumber: newCustomer.phoneNumber, user: { id: userId }, address: { id: newCustomer.address.id, city: newCustomer.address.city, street: newCustomer.address.street, streetNumber: newCustomer.address.streetNumber, country: newCustomer.address.country, zipCode: newCustomer.address.zipCode } });
            console.log("data", data)
            setNewCustomerApi(data)
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    const updateCustomerFromApi = async (updatedCustomer, userId) => {
        try {
            await axios.put(`${API_URL}update/${updatedCustomer.id}`, { name: updatedCustomer.name, user: { id: userId }, surname: updatedCustomer.surname, phoneNumber: updatedCustomer.phoneNumber, address: { id: updatedCustomer.address.id, city: updatedCustomer.address.city, street: updatedCustomer.address.street, streetNumber: updatedCustomer.address.streetNumber, country: updatedCustomer.address.country, zipCode: updatedCustomer.address.zipCode } });
        } catch (error) {
            console.log(error)
        }
    }
    return {
        initialiseCustomersFromApi,
        getCustomersFromApi,
        deleteCustomerFromApi,
        createCustomerFromApi,
        updateCustomerFromApi,
        newCustomerApi,
        setNewCustomerApi,
    }
}
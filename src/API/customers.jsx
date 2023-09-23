import axios from 'axios'

const API_URL = 'http://localhost:3001/cregister/api/customer/'

export async function initialiseCustomersFromApi(userId) {
    try {
        await axios.post(`${API_URL}initialise/${userId}`);
    } catch (error) {
        console.log(error)
    }
}

export async function getCustomersFromApi(userId) {
    try {
        const { data } = await axios.get(`${API_URL}user=${userId}`);
        return data;
    } catch (error) {
        console.log(error)
    }
}


export async function deleteCustomerFromApi(customerId) {
    try {
        await axios.delete(`${API_URL}delete/${customerId}`);
    } catch (error) {
        console.log(error)
    }
}

export async function createCustomerFromApi(newCustomer, userId) {
    try {
        await axios.post(`${API_URL}create`, { name: newCustomer.name, surname: newCustomer.surname, phoneNumber: newCustomer.phoneNumber, user: { id: userId }, address: { id: newCustomer.address.id, city: newCustomer.address.city, street: newCustomer.address.city, streetNumber: newCustomer.address.streetNumber, country: newCustomer.address.country, zipCode: newCustomer.address.zipCode } });
    } catch (error) {
        console.log(error)
    }
}
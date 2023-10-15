import axios from 'axios'

const API_URL = 'https://pos-rh30.onrender.com/cregister/api/customer/'


export async function initialiseCustomersFromApi(userId) {

    try {
        await axios.post(`${API_URL}initialise/${userId}`, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilpersonne.website'
            }
        });
    } catch (error) {
        console.log(error)
    }
}

export async function getCustomersFromApi(userId) {
    try {
        const { data } = await axios.get(`${API_URL}user=${userId}`, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilpersonne.website'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}


export async function deleteCustomerFromApi(customerId) {
    try {
        await axios.delete(`${API_URL}delete/${customerId}`, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilpersonne.website'
            }
        });
    } catch (error) {
        console.log(error)
    }
}

export async function createCustomerFromApi(newCustomer, userId) {
    try {
        const { data } = await axios.post(`${API_URL}create`, { name: newCustomer.name, surname: newCustomer.surname, phoneNumber: newCustomer.phoneNumber, user: { id: userId }, address: { id: newCustomer.address.id, city: newCustomer.address.city, street: newCustomer.address.street, streetNumber: newCustomer.address.streetNumber, country: newCustomer.address.country, zipCode: newCustomer.address.zipCode } }, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilpersonne.website'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function updateCustomerFromApi(updatedCustomer, userId) {
    try {
        await axios.put(`${API_URL}update/${updatedCustomer.id}`, { name: updatedCustomer.name, user: { id: userId }, surname: updatedCustomer.surname, phoneNumber: updatedCustomer.phoneNumber, address: { id: updatedCustomer.address.id, city: updatedCustomer.address.city, street: updatedCustomer.address.street, streetNumber: updatedCustomer.address.streetNumber, country: updatedCustomer.address.country, zipCode: updatedCustomer.address.zipCode } }, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilpersonne.website'
            }
        });
    } catch (error) {
        console.log(error)
    }
}


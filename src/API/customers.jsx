import axios from 'axios'

const API_URL = 'http://localhost:3001/cregister/api/customer/'

export async function initialiseCustomersFromApi(userId) {
    console.log("createcustomers", userId)
    try {
        await axios.post(`${API_URL}initialise/${userId}`);
    } catch (error) {
        console.log(error)
    }
}
import axios from 'axios'

const API_URL = 'https://my-pos-nmyg.onrender.com/cregister/api/user/'


export async function getUserIdFromApi(username) {
    try {
        const { data } = await axios.get(`${API_URL}name=${username}`, {
            headers: {
                'Access-Control-Allow-Origin': 'https://mypos.cyrilpersonne.website'
            }
        });
        return data.id;
    } catch (error) {
        console.log(error)
    }
}


export async function createUserFromApi(username) {
    try {
        await axios.post(`${API_URL}create`, { name: username }, {
            headers: {
                'Access-Control-Allow-Origin': 'https://mypos.cyrilpersonne.website'
            }
        });
    } catch (error) {
        console.log(error)
    }
}



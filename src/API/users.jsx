import axios from 'axios'

const API_URL = ''


export async function getUserIdFromApi(username) {
    try {
        const { data } = await axios.get(`${API_URL}name=${username}`, {
            headers: {
                'Access-Control-Allow-Origin': 'http://mypos.cyrilpersonne.website'
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
                'Access-Control-Allow-Origin': 'http://mypos.cyrilpersonne.website'
            }
        });
    } catch (error) {
        console.log(error)
    }
}



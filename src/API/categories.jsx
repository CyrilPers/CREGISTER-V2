import axios from 'axios'

const API_URL = 'https://my-pos-nmyg.onrender.com/cregister/api/category/'

export async function getCategoriesFromApi(userId) {
    try {
        const { data } = await axios.get(`${API_URL}user=${userId}`, {
            headers: {
                'Access-Control-Allow-Origin': 'https://mypos.cyrilpersonne.website'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function deleteCategoryFromApi(categoryId) {
    try {
        await axios.delete(`${API_URL}delete/${categoryId}`, {
            headers: {
                'Access-Control-Allow-Origin': 'https://mypos.cyrilpersonne.website'
            }
        });
    } catch (error) {
        console.log(error)
    }
}

export async function createCategoryFromApi(newCategory, userId) {
    try {
        const { data } = await axios.post(`${API_URL}create`, { name: newCategory.name, user: { id: userId } }, {
            headers: {
                'Access-Control-Allow-Origin': 'https://mypos.cyrilpersonne.website'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}



export async function initialiseCategoriesAndProductsFromApi(userId) {
    console.log("initialiseCatandProd")
    try {
        await axios.post(`${API_URL}initialise/${userId}`, {
            headers: {
                'Access-Control-Allow-Origin': 'https://mypos.cyrilpersonne.website'
            }
        });
    } catch (error) {
        console.log(error)
    }
}

export async function resetCategoriesAndProductsFromApi(userId) {
    try {
        await axios.post(`${API_URL}reset/${userId}`, {
            headers: {
                'Access-Control-Allow-Origin': 'https://mypos.cyrilpersonne.website'
            }
        });
    } catch (error) {
        console.log(error)
    }
}

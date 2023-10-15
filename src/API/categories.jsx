import axios from 'axios'

const API_URL = 'http://pos-rh30.onrender.com/cregister/api/category/'

export async function getCategoriesFromApi(userId) {
    try {
        const { data } = await axios.get(`${API_URL}user=${userId}`);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function deleteCategoryFromApi(categoryId) {
    try {
        await axios.delete(`${API_URL}delete/${categoryId}`);
    } catch (error) {
        console.log(error)
    }
}

export async function createCategoryFromApi(newCategory, userId) {
    try {
        const { data } = await axios.post(`${API_URL}create`, { name: newCategory.name, user: { id: userId } });
        return data;
    } catch (error) {
        console.log(error)
    }
}



export async function initialiseCategoriesAndProductsFromApi(userId) {
    try {
        await axios.post(`${API_URL}initialise/${userId}`);
    } catch (error) {
        console.log(error)
    }
}

export async function resetCategoriesAndProductsFromApi(userId) {
    try {
        await axios.post(`${API_URL}reset/${userId}`);
    } catch (error) {
        console.log(error)
    }
}

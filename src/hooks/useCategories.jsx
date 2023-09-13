import { useState } from 'react'
import { deleteCategoryFromApi, getCategoriesFromApi } from '../API/categories'

export const useCategories = () => {
    const [categories, setCategories] = useState()
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [newCategory, setNewCategory] = useState()

    const addCategory = async (newCategory, userId) => {
        await createCategoryFromApi(newCategory, userId)
        const updatedCategories = await getCategoriesFromApi(userId);
        setCategories(updatedCategories);
    }

    const deleteCategory = async (id, userId) => {
        await deleteCategoryFromApi(id)
        const updatedCategories = await getCategoriesFromApi(userId);
        setCategories(updatedCategories);

    }

    return { addCategory, categories, setCategories, selectedCategory, setSelectedCategory, newCategory, setNewCategory, deleteCategory }
}
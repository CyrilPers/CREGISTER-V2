import { useState } from 'react'
import { createCategoryFromApi, deleteCategoryFromApi, getCategoriesFromApi, resetCategoriesAndProductsFromApi } from '../API/categories'
import { EMPTY_CATEGORY } from '../enum/category'

export const useCategories = () => {
    const [categories, setCategories] = useState()
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [newCategory, setNewCategory] = useState(EMPTY_CATEGORY)

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

    const resetCategoryAndProducts = async (userId) => {
        await resetCategoriesAndProductsFromApi(userId)
        const updatedCategories = await getCategoriesFromApi(userId);
        setCategories(updatedCategories);
    }

    return { resetCategoryAndProducts, addCategory, categories, setCategories, selectedCategory, setSelectedCategory, newCategory, setNewCategory, deleteCategory }
}
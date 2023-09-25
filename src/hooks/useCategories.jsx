import { useState } from 'react'
import { createCategoryFromApi, deleteCategoryFromApi, getCategoriesFromApi, resetCategoriesAndProductsFromApi } from '../API/categories'
import { EMPTY_CATEGORY } from '../enum/category'
import { deepClone, removeItemFromArray } from '../utils/arrays'

export const useCategories = () => {
    const [categories, setCategories] = useState()
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [newCategory, setNewCategory] = useState(EMPTY_CATEGORY)

    const addCategory = async (newCategory, userId) => {
        await createCategoryFromApi(newCategory, userId)
        // update avec API pour avoir l'ID de la BDD afin de pouvoir delete
        const updatedCategories = await getCategoriesFromApi(userId);
        setCategories(updatedCategories);
    }

    const deleteCategory = async (categoryId) => {
        await deleteCategoryFromApi(categoryId)
        const categoriesCopy = deepClone(categories)
        const updatedCategories = removeItemFromArray(categoryId, categoriesCopy)
        setCategories(updatedCategories);
    }


    return { addCategory, categories, setCategories, selectedCategory, setSelectedCategory, newCategory, setNewCategory, deleteCategory }
}
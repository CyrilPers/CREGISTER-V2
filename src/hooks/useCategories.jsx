import { useState } from 'react'
import { createCategoryFromApi, deleteCategoryFromApi } from '../API/categories'
import { EMPTY_CATEGORY } from '../enum/category'
import { addItemToArray, deepClone, removeItemFromArray } from '../utils/arrays'

export const useCategories = () => {
    const [categories, setCategories] = useState()
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [newCategory, setNewCategory] = useState(EMPTY_CATEGORY)

    const addCategory = async (newCategory, userId) => {
        let newCategoryApi
        await createCategoryFromApi(newCategory, userId)
            .then(apiResponse => {
                newCategoryApi = apiResponse;
            });
        const categoriesCopy = deepClone(categories);
        const updatedCategories = addItemToArray(newCategoryApi, categoriesCopy);
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
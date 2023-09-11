import { useState } from 'react'

export const useCategories = () => {
    const [categories, setCategories] = useState()
    const [selectedCategory, setSelectedCategory] = useState()

    return { categories, setCategories, selectedCategory, setSelectedCategory }
}
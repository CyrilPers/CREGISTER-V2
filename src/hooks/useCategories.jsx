import { useState } from 'react'

export const useCategories = () => {
    const [categories, setCategories] = useState()
    const [selectedCategory, setSelectedCategory] = useState(null)

    return { categories, setCategories, selectedCategory, setSelectedCategory }
}
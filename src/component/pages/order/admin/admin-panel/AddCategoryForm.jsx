import React from 'react'
import { useSuccessMessage } from '../../../../../hooks/useSuccessMessage'
import AddFormButton from './AddFormButton'
import CategoryForm from './CategoryForm'

export default function AddCategoryForm() {


    const { isSubmitted, displaySuccessMessage } = useSuccessMessage()

    const handleSubmit = (event) => {
        event.preventDefault()
        const { name } = event.target
        const newCategory = {
            [name]: value
        }
        addCategory(newCategory)
        displaySuccessMessage()
    }

    return (
        <CategoryForm
            onSubmit={handleSubmit}
            isSubmitted={isSubmitted}
        >
            <AddFormButton isSubmitted={isSubmitted} label={"Ajouter la catégorie"} />
        </CategoryForm>
    )
}

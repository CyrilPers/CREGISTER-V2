import React, { useContext } from 'react'
import AdminContext from '../../../../../context/AdminContext.jsx';
import { EMPTY_PRODUCT } from '../../../../../enum/product.jsx';
import Form from './Form.jsx';
import AddFormButton from './AddFormButton.jsx';
import { useSuccessMessage } from '../../../../../hooks/useSuccessMessage.jsx';
import { findIdInArray } from '../../../../../utils/arrays.jsx';

export default function AddForm() {

    const { addProduct, setNewProduct, newProduct, userId, selectedCategory, categories, currentPage } = useContext(AdminContext)
    const { isSubmitted, displaySuccessMessage } = useSuccessMessage()

    const handleSubmit = (event) => {
        event.preventDefault()
        const now = new Date()
        const id = BigInt(now)
        const mainCat = findIdInArray("MAIN", categories)
        const categoryId = selectedCategory ? selectedCategory : mainCat
        const newProductToAdd = {
            ...newProduct,
            category: { id: categoryId },
            id
        }
        addProduct(newProductToAdd, userId)
        setNewProduct(EMPTY_PRODUCT)
        displaySuccessMessage()
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewProduct({ ...newProduct, [name]: value })
    }

    return (
        <Form
            currentPage={currentPage}
            onSubmit={handleSubmit}
            onChange={handleChange}
            element={newProduct}
            isSubmitted={isSubmitted}
            isProduct={true}
        >
            <AddFormButton isSubmitted={isSubmitted} label={"Ajouter le produit"} />
        </Form>
    )
};
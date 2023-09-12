import React, { useContext } from 'react'
import AdminContext from '../../../../../context/AdminContext';
import { EMPTY_PRODUCT } from '../../../../../enum/product.jsx';
import Form from './Form';
import AddFormButton from './AddFormButton';
import { useSuccessMessage } from '../../../../../hooks/useSuccessMessage';
import { findIdInArray } from '../../../../../utils/arrays';

export default function AddForm() {

    const { addProduct, setNewProduct, newProduct, userId, selectedCategory, categories } = useContext(AdminContext)
    const { isSubmitted, displaySuccessMessage } = useSuccessMessage()


    const handleSubmit = (event) => {
        event.preventDefault()
        const id = crypto.randomUUID()
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
            onSubmit={handleSubmit}
            onChange={handleChange}
            product={newProduct}
            isSubmitted={isSubmitted}
        >
            <AddFormButton isSubmitted={isSubmitted} />
        </Form>
    )
};
import React, { useContext } from 'react'
import AdminContext from '../../../../../context/AdminContext';
import { EMPTY_PRODUCT } from '../../../../../enum/product.jsx';
import Form from './Form';
import AddFormButton from './AddFormButton';
import { useSuccessMessage } from '../../../../../hooks/useSuccessMessage';

export default function AddForm() {

    const { addProduct, setNewProduct, newProduct, userId, selectedCategory } = useContext(AdminContext)
    const { isSubmitted, displaySuccessMessage } = useSuccessMessage()


    const handleSubmit = (event) => {
        event.preventDefault()
        const id = crypto.randomUUID()
        const newProductToAdd = {
            ...newProduct,
            // category: { id: selectedCategory.id },
            id
        }
        addProduct(newProductToAdd, userId, selectedCategory)
        // addProduct(newProductToAdd, userId, selectedCategory)
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
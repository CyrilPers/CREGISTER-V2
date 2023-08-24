import React, { useContext, useState } from 'react'
import AdminContext from '../../../../../context/AdminContext';
import { EMPTY_PRODUCT } from '../../../../../enum/product.jsx';
import Form from './Form';

export default function AddForm() {

    const {addProduct, setNewProduct, newProduct } = useContext(AdminContext)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const id = crypto.randomUUID()
        const newProductToAdd = {
            ...newProduct,
            id
        }
        addProduct(newProductToAdd)
        setNewProduct(EMPTY_PRODUCT)
        displaySubmittedMessage()
    }



    const handleChange = (event) => {
        const{name, value} = event.target
        setNewProduct({ ...newProduct, [name] : value })  
    }

    const displaySubmittedMessage = () => {
        setIsSubmitted(true)
        setTimeout(() => { setIsSubmitted(false)}, 2000)
    }


  return (
    <Form 
    onSubmit={handleSubmit}
    onChange={handleChange}
    product={newProduct}
    isSubmitted={isSubmitted}
    
    />
  )
};
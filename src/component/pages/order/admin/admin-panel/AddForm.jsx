import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import AdminContext from '../../../../../context/AdminContext';
import Button from '../../../../reusable-ui/Button';
import ImagePreview from './ImagePreview';
import TextInput from '../../../../reusable-ui/TextInput';
import SubmitMessage from './SubmitMessage';
import { getInputsConfig } from './inputsConfig';
import { EMPTY_PRODUCT } from '../../../../../enum/product.jsx';

export default function AddForm() {

    const {addProduct, setNewProduct, newProduct} = useContext(AdminContext)
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

    const displaySubmittedMessage = () => {
        setIsSubmitted(true)
        setTimeout(() => { setIsSubmitted(false)}, 2000)
    }


    const handleChange = (event) => {
        const{name, value} = event.target
        setNewProduct({ ...newProduct, [name] : value })  
    }

    const inputsAdd = getInputsConfig(newProduct)


  return (
    <AddFormStyled  onSubmit={handleSubmit}>
        <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title} handleChange={handleChange} />  
        <div className='input-fields'>
            {inputsAdd.map((input) => 
            <TextInput 
            {...input}
            key={input.id}
            onChange={handleChange}
            version="minimalist"
            />
            )}
        </div> 
        <div className='submit'>
            <Button className='submit-button' label="Ajouter le produit" version="success" />           
            {isSubmitted && <SubmitMessage /> }
        </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    column-gap: 8px;
    row-gap: 20px;
    height: 100%;
    width: 70%;

    .input-fields {
        grid-area: 1 / 2 / 4 / 5;
        display: grid;
        row-gap: 8px;
    }

    .submit {
        grid-area: 4 / 2 / 5 / 5; 
        display: flex; 
        align-items: center;
        position: relative;
        top: 3px;
    
        .submit-button {
            height: 100%;
        }
    }

`;
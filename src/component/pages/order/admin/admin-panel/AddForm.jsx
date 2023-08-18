import React, { useContext } from 'react'
import { styled } from 'styled-components';
import AdminContext from '../../../../../context/AdminContext';

export default function AddForm() {

    const {addProduct} = useContext(AdminContext)
    
    const newProduct = {
        id: new Date().getTime(),
        title: "New product",
        imageSource: " https://la-photo-de-mon-produit.png",
        price: 2.5,
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        addProduct(newProduct)
    }



  return (
    <AddFormStyled  onSubmit={handleSubmit}>
        <div className='image-preview'>Image Preview</div>
        <div className='input-fields'>
            <input type="text" placeholder='Nom' />
            <input type="text" placeholder='Image URL' />
            <input type="text" placeholder='Prix' />
        </div>
        <button className='submit-button'>Submit button</button>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
    border: 2px solid black;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
    width: 70%;

    .image-preview {
        background: yellow;  
        grid-area: 1 / 1 / 4 / 2;   
    }
    .input-fields {
        background: blue;
        grid-area: 1 / 2 / 4 / 5;

        display: grid;
    }
    .submit-button {
        background: green;
        grid-area: 4 / 2 / 5 / 5;
        width: 50%;
    }
`;
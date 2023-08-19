import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import AdminContext from '../../../../../context/AdminContext';

export default function AddForm() {

    const {addProduct} = useContext(AdminContext)
    const [title, setTitle] = useState("")
    const [imageSource, setImageSource] = useState("")
    const [price, setPrice] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        const newProduct = {
            id: new Date().getTime(),
            title: title,
            imageSource: imageSource,
            price: price, 
        }
        addProduct(newProduct)
    }

    const titleChange = (event) => {
        setTitle(event.target.value)
    }

    const imageChange = (event) => {
        setImageSource(event.target.value)
    }

    const priceChange = (event) => {
        setPrice(event.target.value)
    }


  return (
    <AddFormStyled  onSubmit={handleSubmit}>
        <div className='image-preview'>Aucune image</div>
        <div className='input-fields'>
            <input value={title} onChange={titleChange} type="text" placeholder='Nom' />
            <input value={"imageSource"} onChange={imageChange} type="text" placeholder='Image URL' />
            <input value={price ? price : ""} onChange={priceChange} type="text" placeholder='Prix' />
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
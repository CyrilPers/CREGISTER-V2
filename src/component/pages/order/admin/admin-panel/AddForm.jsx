import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import AdminContext from '../../../../../context/AdminContext';

const EMPTY_PRODUCT = {
    id:"",
    title: "",
    imageSource: "",
    price: 0,
}


export default function AddForm() {

    const {addProduct} = useContext(AdminContext)

    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

    const handleSubmit = (event) => {
        event.preventDefault()
        const id = crypto.randomUUID()
        const newProductToAdd = {
            ...newProduct,
            id
        }
        addProduct(newProductToAdd)
        setNewProduct(EMPTY_PRODUCT)
    }

    const handleChange = (event) => {
        const newValue = event.target.value
        const name = event.target.name
        setNewProduct({ ...newProduct, [name] : newValue })  // Dynamic property name
    }


  return (
    <AddFormStyled  onSubmit={handleSubmit}>
            <div className='image-preview' >
                {newProduct.imageSource ? (<img src={newProduct.imageSource} alt={newProduct.title} /> ) : (<div>Aucune image</div> )}
            </div>       
            <div className='input-fields'>
            <input name="title" value={newProduct.title} onChange={handleChange} type="text" placeholder='Nom' />
            <input name="imageSource" value={newProduct.imageSource} onChange={handleChange} type="text" placeholder='Image URL' />
            <input name="price" value={newProduct.price ? newProduct.price : ""} onChange={handleChange} type="text" placeholder='Prix' />
        </div>
        <button className='submit-button'>Submit button</button>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
    width: 70%;

    .image-preview {
        grid-area: 1 / 1 / 4 / 2;
        display: flex;
        justify-content: center;
        align-items: center;


        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }
    .input-fields {
        grid-area: 1 / 2 / 4 / 5;

        display: grid;
    }
    .submit-button {
        grid-area: 4 / 2 / 5 / 5;
        width: 50%;
    }
`;
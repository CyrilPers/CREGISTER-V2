import React from 'react'
import { styled } from 'styled-components';

export default function AddForm() {
  return (
    <AddFormStyled>
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
    width: 80%;

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
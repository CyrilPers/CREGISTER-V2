import React from 'react'
import styled from 'styled-components';

export default function CategoryForm({ onSubmit }) {
    return (
        <CategoryFormStyled onSubmit={onSubmit}>
            <div className='input-field'>
                <input
                    type="text"
                    placeholder="Entrez votre catégorie"
                />
            </div>
        </CategoryFormStyled>
    )
}


const CategoryFormStyled = styled.form`
    display: grid;
    height: 100%;
    width: 70%;

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
    @media(max-width: 767px) {
        width: 100%;
        .submit {
        grid-area: 4 / 2 / 5 / 5; 
        display: flex; 
        align-items: center;
        position: relative;

        .submit-button {
            height: 100%;
        }
    }
}
`;
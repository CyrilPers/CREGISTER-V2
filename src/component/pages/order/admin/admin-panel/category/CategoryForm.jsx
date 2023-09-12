import React from 'react'
import styled from 'styled-components';

export default function CategoryForm() {
    return (
        <CategoryFormStyled>
            CategoryForm
        </CategoryFormStyled>
    )
}


const CategoryFormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    column-gap: 8px;
    row-gap: 8px;
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
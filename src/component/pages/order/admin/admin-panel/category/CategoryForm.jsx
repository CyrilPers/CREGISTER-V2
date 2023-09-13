import React from 'react'
import styled from 'styled-components';
import CategoryFormInputs from './CategoryFormInputs.jsx'

const CategoryForm = React.forwardRef(({ onSubmit, children, onChange, category, onBlur }, ref) => {
    return (
        <CategoryFormStyled onSubmit={onSubmit}>
            <CategoryFormInputs onBlur={onBlur} onChange={onChange} category={category} ref={ref} />
            <div className='submit'>{children}</div>
        </CategoryFormStyled>
    )
})

export default CategoryForm


const CategoryFormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(42 1fr);
    column-gap: 8px;
    row-gap: 8px;
    height: 100%;
    width: 70%;


    .submit {
        grid-area: 2 / 2 / 3 / 3; 
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
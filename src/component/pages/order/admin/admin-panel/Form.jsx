import React from 'react'
import { styled } from 'styled-components';
import ImagePreview from './ImagePreview';
import FormInputs from './FormInputs';



const Form = React.forwardRef(({ onSubmit, onChange, element, children, onFocus, onBlur, picture, currentPage }, ref) => {

    return (
        <FormStyled onSubmit={onSubmit} currentPage={currentPage}>
            {picture && <ImagePreview imageSource={element.imageSource} title={element.title} handleChange={onChange} />}
            <FormInputs onFocus={onFocus} onBlur={onBlur} onChange={onChange} element={element} ref={ref} />
            <div className='submit'>{children}</div>
        </FormStyled>
    )
})

export default Form

const FormStyled = styled.form`
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
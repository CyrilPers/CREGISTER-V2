import React from 'react'
import { styled } from 'styled-components';
import ImagePreview from './ImagePreview';
import TextInput from '../../../../reusable-ui/TextInput';
import { getInputSelectConfig, getInputTextsConfig } from './inputsConfig';
import SelectInput from '../../../../reusable-ui/SelectInput';
import FormInputs from './FormInputs';



const Form = React.forwardRef(({ onSubmit, onChange, product, children, onFocus, onBlur }, ref) => {

    return (
        <FormStyled onSubmit={onSubmit}>
            <ImagePreview imageSource={product.imageSource} title={product.title} handleChange={onChange} />
            <FormInputs onFocus={onFocus} onBlur={onBlur} onChange={onChange} product={product} ref={ref} />
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

`;
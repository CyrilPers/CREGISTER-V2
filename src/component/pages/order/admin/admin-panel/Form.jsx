import React from 'react'
import { styled } from 'styled-components';
import Button from '../../../../reusable-ui/Button';
import ImagePreview from './ImagePreview';
import TextInput from '../../../../reusable-ui/TextInput';
import SubmitMessage from './SubmitMessage';
import { getInputsConfig } from './inputsConfig';


const Form = React.forwardRef(({onSubmit, onChange, product, isSubmitted}, ref) => {

    const inputTexts = getInputsConfig(product)

  return (
    <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} handleChange={onChange} />  
        <div className='input-fields'>
            {inputTexts.map((input) => 
            <TextInput 
            {...input}
            key={input.id}
            onChange={onChange}
            version="minimalist"
            ref={ref && input.name === "title" ? ref : null}
            />
            )}
        </div> 
        {onSubmit && (
        <div className='submit'>
            <Button className='submit-button' label="Ajouter le produit" version="success" />           
            {isSubmitted && <SubmitMessage /> }
        </div>)}
    </FormStyled>
  )
})

export default Form

const FormStyled = styled.form`
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
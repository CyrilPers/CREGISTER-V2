import React from 'react'
import { styled } from 'styled-components';
import ImagePreview from './ImagePreview';
import TextInput from '../../../../reusable-ui/TextInput';
import { getInputsConfig } from './inputsConfig';
import SelectInput from '../../../../reusable-ui/SelectInput';

const isAvailableOptions = [
    { value: true, label: "En stock" },
    { value: false, label: "En rupture" },
]

const isPublicisedOptions = [
    { value: false, label: "Sans pub" },
    { value: true, label: "Avec pub" },
]

const Form = React.forwardRef(({ onSubmit, onChange, product, children, onFocus, onBlur }, ref) => {

    const inputTexts = getInputsConfig(product)

    return (
        <FormStyled onSubmit={onSubmit}>
            <ImagePreview imageSource={product.imageSource} title={product.title} handleChange={onChange} />
            <div className='input-fields'>
                {inputTexts.map((input) => (
                    <TextInput
                        {...input}
                        key={input.id}
                        onChange={onChange}
                        version="minimalist"
                        ref={ref && input.name === "title" ? ref : null}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                ))}
                <SelectInput options={isAvailableOptions} name="isAvailable" className="is-available" id="3" />
                <SelectInput options={isPublicisedOptions} name="isPublicised" className="is-publicised" id="4" />
            </div>
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

.input-fields {
    grid-area: 1 / 2 / 4 / 5;

    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    row-gap: 8px;
    column-gap: 8px;

    .title {
        grid-area: 1 / 1 / 2 / 4;
    }
    .imageSource{
        grid-area: 2 / 1 / 3 / 4;
    }

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
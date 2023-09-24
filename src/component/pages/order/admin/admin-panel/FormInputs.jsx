import React from 'react'
import { styled } from 'styled-components';
import { getCustomerInputTextsConfig, getInputSelectConfig, getInputTextsConfig } from './inputsConfig';
import TextInput from '../../../../reusable-ui/TextInput.jsx'
import SelectInput from '../../../../reusable-ui/SelectInput';


const FormInputs = React.forwardRef(({ onFocus, onBlur, element, onChange, currentPage }, ref) => {

    const isProduct = currentPage === "invoice"
    const inputTexts = isProduct ? getInputTextsConfig(element) : getCustomerInputTextsConfig(element)
    const inputSelects = getInputSelectConfig(element)

    return (
        <FormInputsStyled>
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
            {isProduct && inputSelects.map((inputSelect) => (
                <SelectInput
                    key={inputSelect.id}
                    {...inputSelect}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            ))}
        </FormInputsStyled>
    )
});

export default FormInputs;

const FormInputsStyled = styled.div`
    grid-area: 1 / 2 / 4 / 5;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    row-gap: 8px;
    column-gap: 8px;

    .title {
        grid-area: 1 / 1 / 2 / 4;
    }
    .imageSource{
        grid-area: 2 / 1 / 3 / 4;
    }

    @media(max-width: 767px) {
    }

`;
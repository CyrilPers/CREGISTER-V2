import React from 'react'
import TextInput from '../../../../../reusable-ui/TextInput';
import { getCategoryInputTextsConfig } from './categoryInputsConfig.jsx'
import styled from 'styled-components';

export default function CategoryFormInputs(onBlur, category, onChange) {
    const categoryInputTexts = getCategoryInputTextsConfig(category)


    return (
        <CategoryFormInputsStyled className='input-fields'>
            {categoryInputTexts.map((input) => {
                <TextInput
                    {...input}
                    key={input.id}
                    onChange={onChange}
                    version="minimalist"
                    onBlur={onBlur}
                />
            })}
        </CategoryFormInputsStyled>
    )
}


const CategoryFormInputsStyled = styled.div`
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